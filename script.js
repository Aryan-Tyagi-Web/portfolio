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
});


const navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
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
    }

});