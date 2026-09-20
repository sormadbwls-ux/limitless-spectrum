const menuButton = document.querySelector(".menu-toggle");
const header = document.querySelector("header");

if (menuButton && header) {
    menuButton.addEventListener("click", () => {
        header.classList.toggle("menu-open");
    });
}