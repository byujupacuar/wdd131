const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});


const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${currentYear} - Juan Pablo Cuiza Arce - Bolivia`;


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;
