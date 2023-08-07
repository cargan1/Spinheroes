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

$(document).ready(function () {
  $(".rating-block").each(function () {
    let elid = "el-" + Math.random().toString(16).slice(2);
    $(this).attr("id", elid);

    let numberCorrect = parseInt(
      $(this)
        .closest(".offer-item--ratings")
        .children(".votes")
        .find(".voteAmount")
        .text()
    );
    let newVote = (numberCorrect += 1);

    let ratingVal = $(this).data("rating") * 2;
    let inputElements = this.getElementsByTagName("input");
    inputElements = [...inputElements].reverse();
    for (let index = 0; index < ratingVal; index++) {
      inputElements[index].checked = true;
    }

    $(this)
      .children()
      .each(function () {
        let newid;
        if ($(this).attr("id")) {
          newid = elid + "-" + $(this).attr("id");
          $(this).attr("id", newid);
          $(this).attr("name", newid);
        } else {
          newid = elid + "-" + $(this).attr("for");
          $(this).attr("for", newid);
        }
      });
    $(this)
      .children()
      .click(function () {
        $(this)
          .closest(".offer-item--ratings")
          .children(".votes")
          .find(".voteAmount")
          .text(newVote);
      });
  });
});
