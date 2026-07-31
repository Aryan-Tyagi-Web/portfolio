/*=========================================
        PREMIUM CUSTOM CURSOR
=========================================*/

if(window.innerWidth > 768){

    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    let mouseX = window.innerWidth/2;
    let mouseY = window.innerHeight/2;

    let ringX = mouseX;
    let ringY = mouseY;

    document.addEventListener("mousemove",(e)=>{

        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = mouseX+"px";
        dot.style.top  = mouseY+"px";

    });

    function animateCursor(){

        ringX += (mouseX-ringX)*0.18;
        ringY += (mouseY-ringY)*0.18;

        ring.style.left = ringX+"px";
        ring.style.top  = ringY+"px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

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