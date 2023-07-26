const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  //Menu behavior
  menuContainer.classList.toggle("mobile-active");
  menu.classList.toggle("open");
  body.classList.toggle("scroll-overflow");
  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});
