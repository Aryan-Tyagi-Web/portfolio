/*=========================================
        PREMIUM CUSTOM CURSOR
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    // Disable on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    if (!dot || !ring) {
        console.error("Cursor elements not found.");
        return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    // Hide native cursor
    document.body.style.cursor = "none";

    // Mouse move
    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.transform =
            `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

    });

    // Smooth animation
    function animate() {

        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;

        ring.style.transform =
            `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

        requestAnimationFrame(animate);

    }

    animate();

    // Hover targets
    const hoverItems = document.querySelectorAll(`
        a,
        button,
        .btn-primary,
        .btn-secondary,
        .project-card,
        .service-card,
        .tech-card,
        .stat-box,
        .menu-toggle
    `);

    hoverItems.forEach(item => {

        item.addEventListener("mouseenter", () => {

            ring.classList.add("active");
            dot.classList.add("active");

        });

        item.addEventListener("mouseleave", () => {

            ring.classList.remove("active");
            dot.classList.remove("active");

        });

    });

});