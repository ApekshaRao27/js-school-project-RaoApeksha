import type { EventData } from "./types";

interface Props {
  events: EventData[];
  activeEvent: number;
  onYearSelect: (id: number) => void;
  onOpenModal: (id: number) => void;
}

function Timeline({ events, activeEvent, onYearSelect, onOpenModal }: Props) {
  return (
    <nav
      className="timeline-nav position-relative d-flex justify-content-between align-items-center my-3"
      role="navigation"
      aria-label="Historical timeline"
    >
      <div className="timeline-line" aria-hidden="true"></div>

      {events.map((event, index) => (
        <button
          key={index}
          className={`btn btn-sm rounded-pill ${
            index === activeEvent ? "btn-primary" : "btn-outline-primary"
          }`}
          // Accessible state
          aria-current={index === activeEvent ? "step" : undefined}
          aria-label={`Year ${event.year}, ${index === activeEvent ? "current step" : "go to event"}`}
          onClick={() => onYearSelect(index)}
          // Single click for modal (instead of double-click)
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpenModal(index);
            }
          }}
        >
          {event.year}
        </button>

      ))}
    </nav>
  );
}

export default Timeline;
