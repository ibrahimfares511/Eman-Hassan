"use strict";
// ============ All Variables ============
const header = document.querySelector("header");
const menuToggleBtn = document.querySelector("#menu__toggle__btn");
const menuBtn = document.querySelector("#menu__btns");
const mainNavbar = document.querySelector("#main__navbar");
const myBarIndicator = document.querySelector("#myBar");
const themeButton = document.querySelector("#theme__button");
const mainImage = document.querySelector(".main-image");
const localTheme = window.localStorage.getItem("mrs-eman-theme") || "light";
const FeaturesCardsTitle = document.querySelectorAll(".features_card_title");
// ============ All Variables ============

// ============ All Functions ============
// Toggle Navbar Menu FOr Mobile
const toggleNavbarMenu = (e) => {
	const thisBtn = e.target.closest("button");

	thisBtn.classList.toggle("opened");
	thisBtn.setAttribute("aria-expanded", thisBtn.classList.contains("opened"));
	menuBtn.classList.toggle("opened");
};

// Scroll Window
const scrollWindow = (e) => {
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	let scrolled = (winScroll / height) * 100;

	myBarIndicator.style.width = scrolled + "%";
	if (document.documentElement.scrollTop >= 100) {
		mainNavbar.classList.add("scrolling");
	} else {
		mainNavbar.classList.remove("scrolling");
	}
};

// Toggle Theme
const toggleTheme = (e) => {
	let myButton = e.target.closest("button");

	myButton.dataset.theme = myButton.dataset.theme === "dark" ? "light" : "dark";
	document.body.dataset.theme = myButton.dataset.theme;
	window.localStorage.setItem("mrs-eman-theme", myButton.dataset.theme);
};

const checkTheme = () => {
	themeButton.dataset.theme = localTheme;
	document.body.dataset.theme = localTheme;
};

// Move Image When Mouse Move
const moveImage = (e) => {
	let h = header.clientHeight;
	let w = header.clientWidth;
	let i = (10 * e.pageX) / h - 1;
	let o = (2 * e.pageY) / w - 1;
	let s = 20 * o;
	mainImage.style.transform = `translate(${i}px, ${s}px)`;
};

// ============ All Functions ============

// ============ Handel All Function ============
menuToggleBtn.addEventListener("click", toggleNavbarMenu);
themeButton.addEventListener("click", toggleTheme);
window.addEventListener("scroll", () => {
	scrollWindow();
});
header.addEventListener("mousemove", moveImage);
checkTheme();
scrollWindow();

// ============ Handel All Function ============

let coursesCard = document.querySelectorAll(".course-card");

coursesCard.forEach((card) => {
	card.addEventListener("mousemove", function (e) {
		let limits = 15;
		let rect = card.getBoundingClientRect();
		let x = e.clientX - rect.left;
		let y = e.clientY - rect.top;
		let offsetX = x / rect.width;
		let offsetY = y / rect.height;

		let rotateY = offsetX * (limits * 2) - limits;
		let rotateX = offsetY * (limits * 2) - limits;

		card.style.transform = `rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`;
	});

	card.addEventListener("mouseleave", function (e) {
		card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	});
});
