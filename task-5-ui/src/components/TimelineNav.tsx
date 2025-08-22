import type { EventData } from "../types";

interface Props {
  events: EventData[];
  onSelect: (id: number) => void;
}

function TimelineNav({ events, onSelect }: Props) {
  return (
    <h1></h1>
  );
}

export default TimelineNav;

