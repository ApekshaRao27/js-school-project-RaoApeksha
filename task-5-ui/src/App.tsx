import { useState, useEffect } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";
import eventsData from "./data/events.json";
import type { EventData } from "./components/types";

function App() {
  const events: EventData[] = eventsData;

  // Default first event = 1969
  const [activeEvent, setActiveEvent] = useState(0);

  // Modal event is optional
  const [modalEvent, setModalEvent] = useState<number | null>(null);

  // ensure first event shows on load (not strictly needed but safe)
  useEffect(() => {
    setActiveEvent(0);
  }, []);

  return (
    <div id="container">
      <Header />

      {/* Timeline navigation */}
      <Timeline
        events={events}
        activeEvent={activeEvent}
        onYearSelect={setActiveEvent}
        onOpenModal={setModalEvent}
      />

      {/* Active year content always visible */}
      <div className="event-content my-4">
        <h2>{events[activeEvent].title}</h2>
        <p>{events[activeEvent].description}</p>
    
        <button
          className="btn btn-primary"
          onClick={() => setModalEvent(activeEvent)}
        >
          Learn More
        </button>
      </div>

      {/* Optional modal */}
      {modalEvent !== null && (
        <EventModal
          event={events[modalEvent]}
          onClose={() => setModalEvent(null)}
        />
      )}
    </div>
  );
}

export default App;

