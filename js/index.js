/*Display Mode*/
let selectMode = 1;
let displayModeNow;
/*Cart Array*/
let cartArr = [];
if (localStorage.getItem("cartArr")) {
  cartArr = JSON.parse(localStorage.getItem("cartArr"));
} else {
  localStorage.setItem("cartArr", JSON.stringify(cartArr));
}

document.querySelector("#cart").addEventListener("click", () => {
  if (document.querySelector("#cartDivToDisplay").innerHTML) {
    document.querySelector("#cartDivToDisplay").innerHTML = "";
  } else {
    displayCart();
  }
});

/*Display Mode*/
const handleDisplayModeNow = (selectModeNum) => {
  if (displayModeNow) {
    document.getElementById(displayModeNow).classList.add("d-none");
  }

  switch (selectModeNum) {
    case 1:
      displayModeNow = "cardsGrid";
      localStorage.setItem("selectMode", 1);
      break;
    case 2:
      displayModeNow = "listContainer";
      localStorage.setItem("selectMode", 2);
      break;
    case 3:
      displayModeNow = "carouselContainer";
      localStorage.setItem("selectMode", 3);
      break;
  }
  document.getElementById(displayModeNow).classList.remove("d-none");
};

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

/* Cards Filter */
let list = document.querySelectorAll(".list");
let card = document.querySelectorAll(".card");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");
    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < card.length; k++) {
      card[k].classList.remove("active");
      card[k].classList.add("hide");

      if (
        card[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        card[k].classList.remove("hide");
        card[k].classList.add("active");
      }
    }
  });
}

/* Responsive Navbar */
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const nav = document.querySelector(".nav");
  toggleMenu.classList.toggle("active");
  nav.classList.toggle("active");
}

/*Filter*/
document.querySelector("#searchInput").addEventListener("input", filterList);

function filterList() {
  const searchInput = document.querySelector("#searchInput");
  const filter = searchInput.value.toLowerCase();
  const h4item = document.querySelectorAll(".card h4");
  const cardItems = document.querySelectorAll(".card");

  for (let i = 0; i < h4item.length; i++) {
    let text = h4item[i].textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      cardItems[i].style.display = "";
    } else {
      cardItems[i].style.display = "none";
    }
  }
}

/* Pop up filter */

// When the user clicks on <div>, open the popup
function handleFilterPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

const initPageLoad = () => {
  selectModeFromls = localStorage.getItem("selectMode");
  if (selectModeFromls) {
    handleDisplayModeNow(+selectModeFromls);
  } else {
    handleDisplayModeNow(selectMode);
  }
};

initPageLoad();
