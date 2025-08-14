
const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${currentYear} - Juan Pablo Cuiza Arce - Bolivia`;


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

function incrementReviewCount() {
    let count = localStorage.getItem("reviewCount");
    count = count? parseInt(count) + 1: 1;
    localStorage.setItem("reviewCount", count);
}

// Muestra el contador en la página
function displayReviewCount() {
    const count = localStorage.getItem("reviewCount") || 0;
    const countElement = document.getElementById("reviewCount");
    if (countElement) {
        countElement.textContent = count;
}
}

// Ejecutar al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    displayReviewCount();
    incrementReviewCount();
});
