console.log("parallax loaded");

const hero = document.querySelector(".hero");

if (hero) {
    hero.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 120;
    const y = (window.innerHeight / 2 - e.clientY) / 120;

    hero.style.backgroundPosition =
        `calc(50% + ${x}px) calc(50% + ${y}px)`;

});
}
