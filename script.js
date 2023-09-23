"use strict";

const navBar = document.querySelector(".navbar");
const navMenu = document.querySelector(".navbar nav");
const navMenuBtn = document.querySelector(".navbar .menu-icon");

// navbar scroll
window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? navBar.classList.add("navbar--sticky")
    : navBar.classList.remove("navbar--sticky");
});

// navbar mobile menu
navMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("menu-visible");
  console.log("hi");
});
