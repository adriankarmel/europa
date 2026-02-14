// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", function () {

    const topBtn = document.getElementById("topBtn");
    const bottomBtn = document.getElementById("bottomBtn");

    // Si no existe el botón, no ejecutar nada
    if (!topBtn) return;

    window.addEventListener("scroll", function () {

        const scrollPosition = document.documentElement.scrollTop;

        if (scrollPosition > 20) {
            topBtn.style.display = "block";
            if (bottomBtn) bottomBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
            if (bottomBtn) bottomBtn.style.display = "none";
        }
    });

});

// Ir arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Ir abajo
function scrollToBottom() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    });
}
