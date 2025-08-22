import type { EventData } from "../types";

interface Props {
  events: EventData[];
  activeEvent: number;
  onYearSelect: (id: number) => void;
  onOpenModal: (id: number) => void;
}

function Timeline({ events, activeEvent, onYearSelect, onOpenModal }: Props) {
  return (
    <nav className="timeline-nav position-relative d-flex justify-content-between align-items-center my-3">
      <div className="timeline-line"></div>
      {events.map((event, index) => (
        <button
          key={index}
          className={`btn btn-sm rounded-pill ${
            index === activeEvent ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => onYearSelect(index)}
          onDoubleClick={() => onOpenModal(index)} // double-click for modal
        >
          {event.year}
        </button>
      ))}
    </nav>
  );
}

export default Timeline;


