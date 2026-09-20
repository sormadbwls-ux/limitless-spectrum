const hero = document.querySelector(".hero");

if (hero) {
    window.addEventListener("mousemove", (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 10;
        const y = (event.clientY / window.innerHeight - 0.5) * 10;

        hero.style.backgroundPosition =
            `calc(50% + ${x}px) calc(50% + ${y}px)`;
    });
}