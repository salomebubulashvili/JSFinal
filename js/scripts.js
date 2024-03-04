"use strict"

const burgerBar = document.getElementById("burgerBar");
const navMenu = document.querySelector(".navigation")

burgerBar.addEventListener("click", () => {
    burgerBar.classList.toggle("active");
    navMenu.classList.toggle("Active");
});

document.querySelectorAll(".nav-li").forEach((link) =>
  link.addEventListener("click", () => {
    burgerBar.classList.remove("active");
    navMenu.classList.remove("active");
    
  })
);

