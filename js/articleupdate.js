/*Sticky Navbar*/
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

/*Scrolling Animation Effect*/
window.addEventListener("scroll", function () {
  var anime = document.querySelectorAll(".animeX");

  for (var s = 0; s < anime.length; s++) {
    var windoheight = window.innerHeight;
    var animetop = anime[s].getBoundingClientRect().top;
    var animepoint = 150;

    if (animetop < windoheight - animepoint) {
      anime[s].classList.add("active");
    } else {
      anime[s].classList.remove("active");
    }
  }
});

/* Responsive Navbar */
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const nav = document.querySelector(".nav");
  toggleMenu.classList.toggle("active");
  nav.classList.toggle("active");
}

/*Carousel*/

("use strict");
var testim = document.getElementById("testim"),
  testimDots = Array.prototype.slice.call(
    document.getElementById("testim-dots").children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById("testim-content").children
  ),
  testimLeftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 6000,
  currentSlide = 0,
  currentActive = 0,
  testimTimer;

window.onload = function () {
  //Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }
    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }
    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }
    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }

  testimLeftArrow.addEventListener("click", function () {
    playSlide((currentSlide -= 1));
  });
  testimRightArrow.addEventListener("click", function () {
    playSlide((currentSlide += 1));
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }
  playSlide(currentSlide);
};
