const hamburger = document.querySelector(".hamburger");
const drawer = document.querySelector(".mobile-drawer");

hamburger.addEventListener("click", () => {
  //Hamburger Animation
  hamburger.classList.toggle("toggle");
  drawer.classList.toggle("open");
  document.body.classList.toggle("overflow-hidden");
});

const flagCta = document.querySelector(".flag-mobile");
const flagDropdown = document.querySelector(".location-dropdown");
flagCta.addEventListener("click", () => {
  //Hamburger Animation
  flagDropdown.classList.toggle("hidden");
});

const popCta = document.querySelector("#popup-cta");
const popup = document.querySelector(".popup-section");
const popClose = document.querySelector(".pop-close-icon");

popCta.addEventListener("click", () => {
  //Hamburger Animation
  popup.classList.toggle("hidden");
});

popClose.addEventListener("click", () => {
  popup.classList.add("hidden");
});

let scrollpos = window.scrollY;

const scrollDown = document.querySelector(".scroll-down");
const scrollChange = 1;

const add_class_on_scroll = () => scrollDown.classList.add("hidden");
const remove_class_on_scroll = () => scrollDown.classList.remove("hidden");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

let voteAmounts = document.querySelectorAll(".voteAmount");

voteAmounts.forEach((el) => {
  let voteNumber = randomIntFromInterval(231, 891);
  el.textContent = voteNumber;
});

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(".star-icon").each(function () {
  let numberCorrect = parseInt(
    $(this)
      .closest(".rating-container")
      .siblings(".votes")
      .find(".voteAmount")
      .text()
  );
  let newVote = (numberCorrect += 1);
  $(this)
    .hover(
      function () {
        $(this).prevAll().addBack().css("color", "#ffc300");
      },
      function () {
        if (!$(this).parent().attr("data-rating")) {
          $(this).prevAll().addBack().css("color", "#49487b");
        } else {
          $(this)
            .siblings()
            .addBack()
            .each(function (index) {
              index + 1 <= $(this).parent().attr("data-rating")
                ? $(this).css("color", "#ffc300")
                : $(this).css("color", "#49487b");
            });
        }
      }
    )
    .click(function () {
      $(this)
        .parent()
        .attr("data-rating", $(this).prevAll().length + 1);

      $(this)
        .closest(".rating-container")
        .siblings(".votes")
        .find(".voteAmount")
        .text(newVote);
    });
});
