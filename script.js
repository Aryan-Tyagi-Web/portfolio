window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});