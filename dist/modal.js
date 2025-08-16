const modal = document.getElementById("modal");
const closeBtn = document.querySelector("#modal .close-btn");
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });
}
export function openModal(ev) {
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    modalTitle.textContent = ev.title;
    modalText.textContent = ev.moreInfo || ev.description;
    modal.classList.add("active");
}
