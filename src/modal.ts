
import { EventData } from "./types.js";

const modal = document.getElementById("modal") as HTMLElement;
const closeBtn = document.querySelector("#modal .close-btn") as HTMLElement;

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}

export function openModal(ev: EventData): void {
  const modalTitle = document.getElementById("modalTitle") as HTMLElement;
  const modalText = document.getElementById("modalText") as HTMLElement;

  modalTitle.textContent = ev.title;
  modalText.textContent = ev.moreInfo || ev.description;
  modal.classList.add("active");
}

