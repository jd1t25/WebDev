var slides = document.querySelector(".items").children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function () {
  next("next");
};
prevSlide.onclick = function () {
  next("prev");
};

function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

//===================Sticky Navbar=======================

$(document).ready(function () {
  var stickyNavTop = 302;

  var stickyNav = function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $(".nav-container").addClass("sticky");
    } else {
      $(".nav-container").removeClass("sticky");
    }
  };

  stickyNav();

  $(window).scroll(function () {
    stickyNav();
  });
});

//===================Ham Nav=======================

const btnHamburger = document.querySelector("#btnHam");
const header = document.querySelector(".hammenu");
var mainlink = document.querySelector(".mainlink");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (header.classList.contains("open")) {
    header.classList.remove("open");
    mainlink.classList.remove("d-block");
    mainlink.classList.add("open1");
  } else {
    header.classList.add("open");
    mainlink.classList.add("d-block");
    mainlink.classList.remove("open1");
  }
});

//===================Responsive Nav=======================

var drp_ac = document.querySelector("#drp-ac");
var drp_ad = document.querySelector("#drp-ad");
var drp_st = document.querySelector("#drp-st");
var drp_fa = document.querySelector("#drp-fa");
var drp_al = document.querySelector("#drp-al");
var drp_ex = document.querySelector("#drp-ex");
var drp_ab = document.querySelector("#drp-ab");

var ac_submenu = document.querySelector(".academics-menu");
var ad_submenu = document.querySelector(".admission-menu");
var st_submenu = document.querySelector(".students-menu");
var fa_submenu = document.querySelector(".faculty-menu");
var al_submenu = document.querySelector(".alumni-menu");
var ex_submenu = document.querySelector(".exam-menu");
var ab_submenu = document.querySelector(".about-menu");

drp_ac.addEventListener("click", function () {
  console.log("submenuuu ___ acc");

  if (ac_submenu.classList.contains("drp")) {
    ac_submenu.classList.remove("drp");
  } else {
    ac_submenu.classList.add("drp");
  }
});

drp_ad.addEventListener("click", function () {
  console.log("submenuuu ___ acc");

  if (ad_submenu.classList.contains("drp")) {
    ad_submenu.classList.remove("drp");
  } else {
    ad_submenu.classList.add("drp");
  }
});

drp_st.addEventListener("click", function () {
  console.log("submenuuu ___ acc");

  if (st_submenu.classList.contains("drp")) {
    st_submenu.classList.remove("drp");
  } else {
    st_submenu.classList.add("drp");
  }
});

drp_fa.addEventListener("click", function () {
  console.log("submenuuu ___ acc");

  if (fa_submenu.classList.contains("drp")) {
    fa_submenu.classList.remove("drp");
  } else {
    fa_submenu.classList.add("drp");
  }
});

drp_al.addEventListener("click", function () {
  console.log("submenuuu ___ acc");

  if (al_submenu.classList.contains("drp")) {
    al_submenu.classList.remove("drp");
  } else {
    al_submenu.classList.add("drp");
  }
});

drp_ex.addEventListener("click", function () {
  console.log("submenuuu ___ acc");

  if (ex_submenu.classList.contains("drp")) {
    ex_submenu.classList.remove("drp");
  } else {
    ex_submenu.classList.add("drp");
  }
});
drp_ab.addEventListener("click", function () {
  console.log("submenuuu ___ acc");

  if (ab_submenu.classList.contains("drp")) {
    ab_submenu.classList.remove("drp");
  } else {
    ab_submenu.classList.add("drp");
  }
});

//===================News=======================

$(document).ready(function () {
  $("#news-slider").owlCarousel({
    items: 3,
    navigation: true,
    navigationText: ["", ""],
    autoPlay: true,
  });
});

//===================Events=======================

$(document).ready(function () {
  $("#events-slider").owlCarousel({
    items: 3,
    navigation: true,
    navigationText: ["", ""],
    autoPlay: true,
  });
});

//===================FAQ=======================
var elementOld = null;
var openClass = "Accordion__tab--open";

function toggleAccordion(element) {
  content = element.querySelector(".Accordion__tab__content");

  if (elementOld != null) {
    elementOld.classList.remove(openClass);
    contentOld = elementOld.querySelector(".Accordion__tab__content");
    contentOld.style.maxHeight = "0px";
  }

  if (elementOld !== element) {
    element.classList.add(openClass);
    content.style.maxHeight = content.scrollHeight + "px";
    elementOld = element;
  } else {
    elementOld = null;
  }
}

//===================Gallery=======================

// buttons
const gprev = document.querySelector(".prev");
const gnext = document.querySelector(".next");
const closeCur = document.querySelector(".close");

// modal
const modalContent = document.querySelector(".modal-content");
const gslides = Array.from(document.querySelectorAll(".my-slides"));
const gcolumns = document.querySelectorAll(".column");
const gdemo = Array.from(document.querySelectorAll(".demo"));

// text
const numberText = document.querySelectorAll(".my-slides--number");
const captionText = document.getElementById("caption");

// img on page
const hoverShadows = Array.from(document.querySelectorAll(".hover-shadow"));

let slideIndex;
let translate = 0;
let columnWidth;

// if window resize reset all values
window.addEventListener("resize", () => {
  columnWidth = gcolumns[0].offsetWidth;
  gcolumns.forEach((el) => {
    el.style.transform = `translateX(0)`;
  });
  slideIndex = 1;
  translate = 0;
  showSlides(slideIndex);
});

// buttons action

gprev.addEventListener("click", () => {
  if (slideIndex === 1) return false;
  plusSlides(-1);
  if (translate === 0) return null;
  translate += columnWidth + 4;
  gcolumns.forEach((el) => {
    el.style.transform = `translateX(${translate}px)`;
  });
});

gnext.addEventListener("click", () => {
  if (gdemo.length + 1 === 1) return false;
  plusSlides(1);
  if (translate === -(gcolumns.length - 3) * (columnWidth + 4)) return null;
  translate -= columnWidth + 4;
  gcolumns.forEach((el) => {
    el.style.transform = `translateX(${translate}px)`;
  });
});
closeCur.addEventListener("click", () => closeModal());

// add click to main img to trigger open carousel

hoverShadows.forEach((el, i) => {
  el.addEventListener("click", () => {
    openModal();
    currentSlide(i + 1);
  });
});

// add click thumbnails to show curent slide

gdemo.forEach((el, i) => {
  el.addEventListener("click", () => currentSlide(i + 1));
});

// Open modal

function openModal() {
  document.getElementById("myModal").style.display = "block";
  columnWidth = gcolumns[0].offsetWidth;
  showAndClose();
  numberText.forEach((el, id) => {
    el.innerHTML = `${id + 1} / ${numberText.length}`;
  });
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
  let x = n - 3 < 0 ? 0 : n - 3;
  translate = -(columnWidth + 4) * x;
  gcolumns.forEach((el) => {
    el.style.transform = `translateX(${translate}px)`;
  });
}

// control showing slides

function showSlides(n) {
  let i;
  showAndClose();
  for (i = 0; i < gslides.length; i++) {
    gslides[i].style.display = "none";
  }
  for (i = 0; i < gdemo.length; i++) {
    gdemo[i].classList.remove("active");
  }
  gslides[slideIndex - 1].style.display = "block";
  gdemo[slideIndex - 1].classList.add("active");
  captionText.innerHTML = gdemo[slideIndex - 1].alt;
}

// control buttons if reach to limit left or right

function showAndClose() {
  if (slideIndex === 1) {
    gprev.style.display = "none";
  } else {
    gprev.style.display = "block";
  }

  if (slideIndex === gdemo.length) {
    gnext.style.display = "none";
  } else {
    gnext.style.display = "block";
  }
}
