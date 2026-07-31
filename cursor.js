alert("cursor.js loaded");

const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

if(dot && ring){

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    document.addEventListener("mousemove",(e)=>{

        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.transform =
        `translate(${mouseX}px,${mouseY}px) translate(-50%,-50%)`;

    });

    function animate(){

        ringX += (mouseX-ringX)*0.18;
        ringY += (mouseY-ringY)*0.18;

        ring.style.transform =
        `translate(${ringX}px,${ringY}px) translate(-50%,-50%)`;

        requestAnimationFrame(animate);

    }

    animate();

    document
    .querySelectorAll("a,button,.btn-primary,.btn-secondary,.project-card")
    .forEach(el=>{

        el.addEventListener("mouseenter",()=>{

            ring.classList.add("hover");

        });

        el.addEventListener("mouseleave",()=>{

            ring.classList.remove("hover");

        });

    });

}