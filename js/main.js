"use strict";
// All Variables
const menuToggleBtn = document.querySelector("#menu__toggle__btn");
const menuBtn = document.querySelector("#menu__btns");

// All Functions
const handelClickOnMenuBtn = (e) => {
	const thisBtn = e.target.closest("button");

	thisBtn.classList.toggle("opened");
	thisBtn.setAttribute("aria-expanded", thisBtn.classList.contains("opened"));
	menuBtn.classList.toggle("opened");
};

// Handel All Function
menuToggleBtn.addEventListener("click", handelClickOnMenuBtn);
