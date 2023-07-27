// import phoneInput from "./phoneInput.js";

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

const popCta = document.querySelector("#popup-cta");
const popup = document.querySelector(".popup-section");
popCta.addEventListener("click", () => {
  //Hamburger Animation
  popup.classList.toggle("hidden");
});

// phoneInput();
