const cursor = document.querySelector("#cursor");
const ring = document.querySelector(".cursor__ring");
const dot = document.querySelector(".cursor__dot");

if (cursor && ring && dot) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {

        currentX += (mouseX - currentX) * 0.18;
        currentY += (mouseY - currentY) * 0.18;

        cursor.style.transform =
            `translate3d(${currentX}px, ${currentY}px, 0)`;

        dot.style.transform =
            `translate(-50%,-50%)`;

        ring.style.transform =
            `translate(-50%,-50%)`;

        requestAnimationFrame(animate);
    }

    animate();

}