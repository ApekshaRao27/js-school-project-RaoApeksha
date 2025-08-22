import type { EventData } from "../types";
import { Modal, Button } from "react-bootstrap";
interface Props {
  event: EventData;
  onClose: () => void;
}

function EventModal({ event, onClose }: Props) {
  return (
     <Modal show={!!event} onHide={onClose} centered>
      <Modal.Header closeButton>
          <Modal.Title>{event?.year}</Modal.Title>
        <Modal.Title>{event?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{event?.description}</p>
        <h5>Category:</h5>
        <p>{event?.category}</p>
        <h5>More Info:</h5>
        <p>{event?.moreInfo}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EventModal;
