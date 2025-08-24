import type { EventData } from "./types";
import { Modal, Button } from "react-bootstrap";

interface Props {
  event: EventData;
  onClose: () => void;
}

function EventModal({ event, onClose }: Props) {
  const modalTitleId = "event-modal-title";
  const modalDescId = "event-modal-description";

  return (
    <Modal
      show={!!event}
      onHide={onClose}
      centered
      aria-labelledby={modalTitleId}
      aria-describedby={modalDescId}
      aria-modal="true"
    >
      <Modal.Header closeButton>
        {/* Single accessible title */}
        <Modal.Title id={modalTitleId}>
          {event?.year} – {event?.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body id={modalDescId}>
        <p>{event?.description}</p>

        <h5 id="event-category-label">Category:</h5>
        <p aria-labelledby="event-category-label">{event?.category}</p>

        <h5 id="event-moreinfo-label">More Info:</h5>
        <p aria-labelledby="event-moreinfo-label">{event?.moreInfo}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose} aria-label="Close event details dialog">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EventModal;

