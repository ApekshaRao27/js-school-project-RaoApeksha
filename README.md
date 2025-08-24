# Timeline App
## Stage 1:-HTML Structure
This is the static skeleton of the Timeline App.  
It includes:
- Header with logo and theme toggle button.
- Navigation placeholder for filters.
- Main section for timeline event markers.
- Modal placeholder for future pop-ups.
- Semantic HTML structure ready for styling and interactivity later stages.
## Stage 2:-CSS Structure
This includes:-
- Responsive layout using Flexbox
- Styling for :
  - event markers(years,dot and line)
  - header and buttons
  - modal placeholder
- Responsive design using media queries to support various screen sizes.

## Stage 3:-Adding Javascript
- This includes:-
 - Fetching & parsing event data from events.json
 - Rendering event items dynamically inside #timeline
 - Attaching click handlers to open #modal with event details
 - Close functionality for modal 
 - Dynamic content update for modal (title, description, year, image, category)

## Stage 4:- Introducing TypeScript & Build Setup
- This includes:  
  - Initializing TypeScript with tsconfig.json
  - Defining interfaces/types for event data in types.ts  
  - Using ES modules with separate files (fetcher.ts, renderer.ts, modal.ts,etc)  
  - Compiling TypeScript → JavaScript into dist/folder  
  - Updating index.html to use compiled dist/index.js  
  - Ensuring browser compatibility with ES6 module output  
  - Added .gitignore file to exclude node modules
 
## Stage 5:- 
- A React + TypeScript timeline application built with Vite and Bootstrap.
- React + TypeScript setup with Vite.
- Simple Bootstrap styling 
- Dark/light theme toggle (switch between modes).
- Loads events from events.json.
- Maps over events and renders EventMarker for each year/title.
- Displays each event as a clickable dot on the timeline.
- Opens on click of an event marker.
- Uses useState and useEffect to manage modal visibility and theme toggle.

## Stage 6:-
- Semantic roles: banner, switch, nav, aria-labelledby, aria-describedby.
- Timeline uses aria-current="step" and labeled buttons for screen readers.
- Modal traps focus while open; returns focus on close.
- All interactive elements are keyboard-accessible.
- Bootstrap colors meet WCAG AA contrast standards.
- Headings use semantic tags (h1, h2); focus outlines added for key buttons.
