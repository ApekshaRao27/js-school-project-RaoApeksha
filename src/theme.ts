
const toggleBtn = document.getElementById("theme-toggle") as HTMLElement;

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}
