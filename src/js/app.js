const hamburger = document.querySelector(".hamburger");
const drawer = document.querySelector(".mobile-drawer");

hamburger.addEventListener("click", () => {
  //Hamburger Animation
  hamburger.classList.toggle("toggle");
  drawer.classList.toggle("open");
  document.body.classList.toggle("overflow-hidden");
});

const popCta = document.querySelector("#popup-cta");
const popup = document.querySelector(".popup-section");
popCta.addEventListener("click", () => {
  //Hamburger Animation
  popup.classList.toggle("hidden");
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

// let stars = document.querySelectorAll('input[type="radio"]');

// stars.forEach((el) => {
//   el.addEventListener(
//     "input",
//     function () {
//       let currentNumb =
//         el.parentElement.nextSibling.nextSibling.firstChild.nextSibling;
//       let getNumber = Number(currentNumb.innerText);
//       currentNumb.innerText = getNumber += 1;
//     },
//     { once: true }
//   );
// });

$(".rating .user-stars .star")
  .hover(function () {
    $(this).addClass("fas to_rate");
    $(this)
      .parent()
      .find(".star:lt(" + $(this).index() + ")")
      .addClass("fas to_rate");
    $(this)
      .parent()
      .find(".star:gt(" + $(this).index() + ")")
      .addClass("no_to_rate");
  })
  .mouseout(function () {
    $(this).parent().find(".star").removeClass("to_rate");
    $(this)
      .parent()
      .find(".star:not(.rated)")
      .removeClass("fas")
      .addClass("far");
    $(this)
      .parent()
      .find(".star:gt(" + $(this).index() + ")")
      .removeClass("no_to_rate");
  })
  .click(function () {
    var index = $(this).index() + 1;
    var rating = $(this).closest(".rating");
    var classList = $(rating).attr("class");
    var classArray = classList.split(/\s+/);
    var current_tt_class;
    $(classArray).each(function (index, item) {
      if (item.substr(0, 2) === "tt") {
        current_tt_class = item;
      }
    });

    $(".ops .rating")
      .removeClass(current_tt_class)
      .addClass("tt" + index);
    $(this).removeClass("to_rate").addClass("fas rated");
    $(this)
      .parent()
      .find(".star:lt(" + $(this).index() + ")")
      .removeClass("far to_rate")
      .addClass("fas rated");
    $(this)
      .parent()
      .find(".star:gt(" + $(this).index() + ")")
      .removeClass("no_to_rate")
      .removeClass("fas rated")
      .addClass("far");

    let numberThings = parseInt(
      $(this).closest(".ops").siblings(".votes").find(".voteAmount").text()
    );
    let newVote = (numberThings += 1);
    $(this)
      .closest(".ops")
      .siblings(".votes")
      .find(".voteAmount")
      .text(newVote)
      .one();

    //Save your rate
    //refresh public rate
  });
