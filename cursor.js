/*=========================================
        PREMIUM CUSTOM CURSOR
=========================================*/

if (window.matchMedia("(pointer:fine)").matches) {

    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove",(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animate(){

    ringX += (mouseX-ringX)*0.15;
    ringY += (mouseY-ringY)*0.15;

    document.querySelector(".cursor-dot").style.transform =
    `translate(${mouseX}px,${mouseY}px) translate(-50%,-50%)`;

    document.querySelector(".cursor-ring").style.transform =
    `translate(${ringX}px,${ringY}px) translate(-50%,-50%)`;

    requestAnimationFrame(animate);

}

animate();

    const hoverItems = document.querySelectorAll(
        "a,button,.btn-primary,.btn-secondary,.project-card,.service-card,.stat-box,.tech-card,.menu-toggle"
    );

    hoverItems.forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            ring.classList.add("active");
            dot.classList.add("active");

        });

        item.addEventListener("mouseleave",()=>{

            ring.classList.remove("active");
            dot.classList.remove("active");

        });

    });

}