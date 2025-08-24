import type { EventData } from "./types";

interface Props {
  events: EventData[];
  onSelect: (id: number) => void;
}

function TimelineNav({ events, onSelect }: Props) {
  return (
    <nav aria-label="Timeline navigation">
      <ul className="pagination justify-content-center">
        {events.map((event, index) => (
          <li key={index} className="page-item">
            <button
              type="button"
              className="page-link"
              onClick={() => onSelect(index)}
              aria-label={`Go to year ${event.year}`}
            >
              {event.year}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TimelineNav;
