import { fetchEvents } from "./fetcher.js";
import { renderTimeline } from "./renderer.js";
import "./theme.js";
fetchEvents()
    .then(events => renderTimeline(events))
    .catch(err => console.error(err));
