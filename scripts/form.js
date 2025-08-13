
const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${currentYear} - Juan Pablo Cuiza Arce - Bolivia`;


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;
