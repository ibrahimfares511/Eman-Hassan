"use strict";
// ============ All Variables ============
const menuToggleBtn = document.querySelector("#menu__toggle__btn");
const menuBtn = document.querySelector("#menu__btns");
const mainNavbar = document.querySelector("#main__navbar");
const myBarIndicator = document.querySelector("#myBar");
const themeButton = document.querySelector("#theme__button");
const mainImage = document.querySelector(".main-image");
const localTheme = window.localStorage.getItem("mrs-eman-theme") || "light";
const FeaturesCardsTitle = document.querySelectorAll(".features_card_title");
const coursesCard = document.querySelectorAll(".classroom-card");
const sectionTitle = document.querySelectorAll(".section-title");
const featuresCardTitle = document.querySelectorAll(".features_card_title");
// ============ All Variables ============

// ============ All Functions ============
// Toggle Navbar Menu For Mobile
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

// Animation Section Title
const sectionTitleAnimation = () => {
  sectionTitle.forEach((title) => {
    const titleOffsetTop = title.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight / 2.4;

    let newRight = -100 + (scrollPosition - titleOffsetTop);

    // تأكد من أن العنصر لا يتحرك بعد الوصول إلى موضعه النهائي
    if (newRight > 0) {
      newRight = 0;
    }

    title.style.setProperty("--title-after-right", `${newRight}px`);
  });
};

// Animation Features Title
const featuresTitleAnimation = () => {
  featuresCardTitle.forEach((title) => {
    const titleOffsetTop = title.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight / 10.3;
    const color = title.dataset.background;

    let newY = -400 + (scrollPosition - titleOffsetTop);
    let newRotate =
      30 -
      ((scrollPosition - titleOffsetTop) / (window.innerHeight / 2.3)) * 20;

    // تأكد من أن العنصر لا يتحرك بعد الوصول إلى موضعه النهائي
    if (newY > 0) {
      newY = 0;
    } else if (newY < -350) {
      newY = -350;
    }

    // تأكد من أن الدوران لا يتجاوز 0 درجة
    if (newRotate < 0) {
      newRotate = 0;
    }

    title.style.setProperty("--title-translate-y", `${newY}px`);
    title.style.setProperty("--title-rotate", `${newRotate}deg`);
    title.style.backgroundColor = color;
  });
};

// ============ All Functions ============

// ============ Handel All Function ============
menuToggleBtn.addEventListener("click", toggleNavbarMenu);
themeButton.addEventListener("click", toggleTheme);
window.addEventListener("scroll", () => {
  scrollWindow();
  sectionTitleAnimation();
  featuresTitleAnimation();
});

checkTheme();
scrollWindow();
sectionTitleAnimation();
featuresTitleAnimation();

// ============ Handel All Function ============

// Make Animation With Mouse Move In Course Card
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
