const toggleBtn = document.getElementById("toggleBtn");
const mobileDropdown = document.getElementById("mobile-dropdown");

toggleBtn.addEventListener("click", () => {
    mobileDropdown.classList.toggle("show");
});