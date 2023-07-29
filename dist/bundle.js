'use strict';

const hamburger = document.querySelector(".hamburger");
const drawer = document.querySelector(".mobile-drawer");

hamburger.addEventListener("click", () => {
  //Hamburger Animation
  hamburger.classList.toggle("toggle");
  drawer.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
});

const popCta = document.querySelector("#popup-cta");
const popup = document.querySelector(".popup-section");
popCta.addEventListener("click", () => {
  //Hamburger Animation
  popup.classList.toggle("hidden");
});

const infoIcon = document.querySelector(".info-icon");
const tooltip = document.querySelector(".tooltip");
infoIcon.addEventListener("click", () => {
  tooltip.classList.toggle("hidden");
});
