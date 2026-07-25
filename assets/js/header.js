async function loadHeader() {
    const response = await fetch("/header.html");
    const html = await response.text();

    document.getElementById("header").innerHTML = html;

    const currentPath = window.location.pathname;

    document.querySelectorAll(".nav-item").forEach((item) => {
        const linkPath = new URL(item.href).pathname;

        if (linkPath === currentPath) {
            item.classList.add("active");
        }
    });
}

loadHeader();