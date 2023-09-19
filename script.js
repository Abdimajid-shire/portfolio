"use strict";

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? navbar.classList.add("navbar--sticky")
    : navbar.classList.remove("navbar--sticky");
});
