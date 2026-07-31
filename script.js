const menuOverlay = document.querySelector(".menu-overlay");

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});


const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
    menuOverlay.classList.toggle("active");

    document.body.classList.toggle("menu-open");

    if(navMenu.classList.contains("active")){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "";
    }

});


const navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
        document.body.style.overflow = "";
    });
});

document.addEventListener("click", (e) => {

    if (
        !navMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
        document.body.style.overflow = "";
    }

});

menuOverlay.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
    document.body.style.overflow = "";
});

const sections = document.querySelectorAll("section[id]");
const menuLinks = document.querySelectorAll('a[href^="#"]');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            menuLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `nav ul li a[href="#${entry.target.id}"]`
            );

            if(activeLink){
                activeLink.classList.add("active");
            }

        }

    });

},{
    threshold:0.4
});

sections.forEach(section => {
    observer.observe(section);
});

menuLinks.forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if(!href.startsWith("#")) return;

        e.preventDefault();

        const target = document.querySelector(href);

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

            history.replaceState(null, null, " ");

        }

    });

});

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let current = 0;

        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16);

        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.innerText = target;

            } else {

                counter.innerText = Math.floor(current);

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => counterObserver.observe(counter));

/* ==========================================
   PREMIUM CUSTOM CURSOR
========================================== */

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

if (cursorDot && cursorOutline) {

    let mouseX = 0;
    let mouseY = 0;

    let outlineX = 0;
    let outlineY = 0;

    // Mouse Position
    window.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.transform =
        `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

});

    // Smooth Animation
    function animateCursor(){

        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        cursorOutline.style.transform =
        `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

    // Click Effect
    document.addEventListener("mousedown", () => {
        cursorDot.classList.add("cursor-click");
        cursorOutline.classList.add("cursor-click");
    });

    document.addEventListener("mouseup", () => {
        cursorDot.classList.remove("cursor-click");
        cursorOutline.classList.remove("cursor-click");
    });

    // Hover Elements
    const hoverElements = document.querySelectorAll(`
        a,
        button,
        .btn,
        .btn-primary,
        .btn-secondary,
        .project-link,
        .social-links a,
        nav a,
        .menu-toggle
    `);

    hoverElements.forEach(el => {

        el.addEventListener("mouseenter", () => {
            cursorDot.classList.add("cursor-hover");
            cursorOutline.classList.add("cursor-hover");
        });

        el.addEventListener("mouseleave", () => {
            cursorDot.classList.remove("cursor-hover");
            cursorOutline.classList.remove("cursor-hover");
        });

    });

    // Image / Cards
    const imageElements = document.querySelectorAll(`
        img,
        .project-card,
        .service-card
    `);

    imageElements.forEach(el => {

        el.addEventListener("mouseenter", () => {
            cursorDot.classList.add("cursor-image");
            cursorOutline.classList.add("cursor-image");
        });

        el.addEventListener("mouseleave", () => {
            cursorDot.classList.remove("cursor-image");
            cursorOutline.classList.remove("cursor-image");
        });

    });

    // Hide Cursor while Leaving Window
    document.addEventListener("mouseleave", () => {
        cursorDot.classList.add("cursor-hide");
        cursorOutline.classList.add("cursor-hide");
    });

    document.addEventListener("mouseenter", () => {
        cursorDot.classList.remove("cursor-hide");
        cursorOutline.classList.remove("cursor-hide");
    });

    // Hide on Text Fields
    document.querySelectorAll("input, textarea").forEach(el => {

        el.addEventListener("mouseenter", () => {
            cursorDot.classList.add("cursor-hide");
            cursorOutline.classList.add("cursor-hide");
        });

        el.addEventListener("mouseleave", () => {
            cursorDot.classList.remove("cursor-hide");
            cursorOutline.classList.remove("cursor-hide");
        });

    });

}