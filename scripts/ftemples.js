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

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-thumb.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Cochabamba Bolivia",
		location: "Cochabamba, Bolivia",
		dedicated: "2000, April, 30",
		area: 35500,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13721-main.jpg"
	},
	{
		templeName: "Curitiba Brazil",
		location: "Curitiba, Brazil",
		dedicated: "2008, June, 1",
		area: 27850,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-60225.jpg"
	},
	{
		templeName: "Kirtland",
		location: "Kirtland, Ohia, United States",
		dedicated: "1836, March, 27",
		area: 15000,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-59480-thumb.jpg"
	},
	// Add more temple objects here...
];
createTempleCard(temples);

const alllink = document.querySelector("#all");

alllink.addEventListener("click", () => {
	createTempleCard(temples);
})

const oldlink = document.querySelector("#old");

oldlink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => {
		const year = parseInt(temple.dedicated.split(",")[0].trim());
		return year < 1900;
	}));
})
const newlink = document.querySelector("#new");

newlink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => {
		const year = parseInt(temple.dedicated.split(",")[0].trim());
		return year > 2000;
	}));
})

const smalllink = document.querySelector("#small");

smalllink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area < 10000));
})

const largelink = document.querySelector("#large");

largelink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area > 90000));
})

function createTempleCard(filteredTemples) {
	document.querySelector(".container").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedicated :</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size :</span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".container").appendChild(card);
	});
}

