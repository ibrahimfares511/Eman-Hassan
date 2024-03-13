"use strict";
// ============ All Variables ============
const menuToggleBtn = document.querySelector("#menu__toggle__btn");
const menuBtn = document.querySelector("#menu__btns");
const mainNavbar = document.querySelector("#main__navbar");
const myBarIndicator = document.querySelector("#myBar");
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
// ============ All Functions ============

// ============ Handel All Function ============
menuToggleBtn.addEventListener("click", toggleNavbarMenu);
window.addEventListener("scroll", scrollWindow);
// ============ Handel All Function ============
