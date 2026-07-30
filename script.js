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

menuOverlay.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
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

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
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