
import { EventData } from "./types.js";
import { openModal } from "./modal.js";

export function renderTimeline(events: EventData[]): void {
  const timeline = document.getElementById("timeline") as HTMLElement;
  const nav = document.querySelector(".timeline-nav") as HTMLElement;

  events.forEach((ev, i) => {
    const year = document.createElement("span");
    year.className = "year";
    year.dataset.index = i.toString();
    year.innerHTML = `${ev.year}`;
    year.addEventListener("click", () => selectYear(i));
    nav.appendChild(year);
  });

  // Default year
  selectYear(0);

  function selectYear(i: number): void {
    nav.querySelectorAll(".year").forEach(el => el.classList.remove("active"));
    const activeYear = nav.querySelector(`.year[data-index="${i}"]`);
    if (activeYear) activeYear.classList.add("active");
    renderEvent(events[i], i);
  }

  function renderEvent(ev: EventData, i: number): void {
    timeline.innerHTML = `
      <article>
        <h2>${ev.year}</h2>
        <h3>${ev.title}</h3>
        <figure>
          <img src="${ev.imageURL}" alt="${ev.title}" style="width:100%; max-height:400px;">
          <figcaption>${ev.description}</figcaption>
          <p>Category: ${ev.category}</p>
        </figure>
        <button class="learn-more" data-index="${i}">Learn More</button>
      </article>
    `;

    const learnMoreBtn = timeline.querySelector(".learn-more") as HTMLButtonElement;
    learnMoreBtn.addEventListener("click", (e) => {
      const index = (e.currentTarget as HTMLButtonElement).dataset.index;
      if (index !== undefined) {
        openModal(events[parseInt(index, 10)]);
      }
    });
  }
}

