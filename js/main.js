const body = document.querySelector("body");
const burger = document.querySelector(".header-center__burger");
const burgerMenu = document.querySelector(".header-center-mobile");
const arrowCatalog = document.querySelector(".catalog__btn");
const catalog = document.querySelector(".catalog");
const catalogElem = document.querySelectorAll(".catalog__element");
const clickElementMenu = document.querySelectorAll(".catalog__arrow-1");
const catalogMenu = document.querySelector(".catalog-menu");
const subCatalogMenu = document.querySelector(".catalog-menu-sub");
const headerBottomCatalogLink = document.querySelector(".header-bottom__link");
const catalogMenuSubEl = document.querySelectorAll(
  ".catalog-menu-sub__element"
);
const catalogMenuSubLink = document.querySelectorAll(".catalog-menu-sub__link");
const subSubMenu = document.querySelector(".catalog-menu-sub-sub");
const closeSubSubMenu = document.querySelector(".catalog-menu-sub-sub__btn");
const btnSubMenu = document.querySelector(".catalog-menu-sub__btn");
const caruselWallsItems = document.querySelector(".carusel__items");
const caruselWallsBtnPrev = document.querySelector(".carusel__btn-prev");
const caruselWallsBtnNext = document.querySelector(".carusel__btn-next");

//----click burger and add classes to burger and burger menu
burger.addEventListener("click", function () {
  burger.classList.toggle("open");
  burgerMenu.classList.toggle("active");
  body.classList.toggle("hidden");
});

//click arrow Catalog
arrowCatalog.addEventListener("click", function () {
  catalog.classList.toggle("open");
});
//open sub-menu

for (let i = 0; i < catalogElem.length; i++) {
  catalogElem[i].addEventListener("click", function (event) {
    const subMenu = this.querySelector(".catalog-menu-sub");
    if (subMenu) {
      event.stopPropagation();
      subMenu.classList.toggle("visible");
      console.log("hello");
    }
  });
}
//open catalog-menu-sub-sub
for (let i = 0; i < catalogMenuSubEl.length; i++) {
  catalogMenuSubEl[i].addEventListener("click", function (event) {
    const subSubMenu = this.querySelector(".catalog-menu-sub-sub");
    if (subSubMenu) {
      event.stopPropagation();
      subSubMenu.classList.toggle("visible");
    }
  });
}
document.addEventListener("click", function (event) {
  const isCatalogSubMenu = event.target.closest(".catalog-menu-sub");
  const isCatalogSubSubMenu = event.target.closest(".catalog-menu-sub-sub");
  const isCatalog = event.target.closest(".catalog");
  if (!isCatalogSubMenu && !isCatalogSubSubMenu && !isCatalog) {
    allBlocksSubMenu();
    catalog.classList.remove("open");
  }
});
//close all blocks sub-catalog
function allBlocksSubMenu() {
  for (let i = 0; i < catalogElem.length; i++) {
    const subMenu = catalogElem[i].querySelector(".catalog-menu-sub");
    if (subMenu && subMenu.classList.contains("visible")) {
      subMenu.classList.remove("visible");
    }
  }
  for (let i = 0; i < catalogMenuSubEl.length; i++) {
    const subSubMenu = catalogMenuSubEl[i].querySelector(
      ".catalog-menu-sub-sub"
    );
    if (subSubMenu && subSubMenu.classList.contains("visible")) {
      subSubMenu.classList.remove("visible");
    }
  }
}

//------------- SWIPER BANNER-------------
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//------------CARUSEL WALLS----------
let currentIndex = 0;

function showSlidesWalls() {
  const carousel = document.querySelector(".carousel__items");
  carousel.style.transform = `translateX(${-currentIndex * 260}px)`; // Сдвиг на 1 элемент (20%)
}

function nextSlideWalls() {
  const totalItems = document.querySelectorAll(".carousel__item").length;
  currentIndex = (currentIndex + 1) % totalItems;
  showSlidesWalls();
}

function prevSlideWalls() {
  const totalItems = document.querySelectorAll(".carousel__item").length;
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showSlidesWalls();
}

const carouselContainer = document.querySelector(".carousel__container");
const hammer = new Hammer(carouselContainer);

hammer.on("swipeleft", function () {
  nextSlideWalls();
  console.log("hello");
});

hammer.on("swiperight", function () {
  prevSlideWalls();
  console.log("hello");
});

//------CAROUSEL COMPLEXSES--------------
let currentComplexes = 0;

function showSlidesComlexes() {
  const carousel = document.querySelector(".carousel-items");
  carousel.style.transform = `translateX(${-currentComplexes * 280}px)`; // Сдвиг на 1 элемент (20%)
}

function nextSlideComplexes() {
  const totalItems = document.querySelectorAll(".carousel-item").length;
  currentComplexes = (currentComplexes + 1) % totalItems;
  showSlidesComlexes();
}

function prevSlideComlexes() {
  const totalItems = document.querySelectorAll(".carousel-item").length;
  currentComplexes = (currentComplexes - 1 + totalItems) % totalItems;
  showSlidesComlexes();
}

const carouselContainerComplexes = document.querySelector(
  ".carousel-container"
);
const hammerComplexes = new Hammer(carouselContainerComplexes);

hammerComplexes.on("swipeleft", function () {
  nextSlideComplexes();
});

hammerComplexes.on("swiperight", function () {
  prevSlideComlexes();
});
//------CAROUSEL WEIGHTLIFTING--------------
let currentWeigthLifting = 0;

function showSlidesWeigthLifting() {
  const carousel = document.querySelector(".weightlifting-items");
  carousel.style.transform = `translateX(${-currentWeigthLifting * 280}px)`; // Сдвиг на 1 элемент (20%)
}

function nextSlideWeigthLifting() {
  const totalItems = document.querySelectorAll(".weightlifting-item").length;
  currentWeigthLifting = (currentWeigthLifting + 1) % totalItems;
  showSlidesWeigthLifting();
}

function prevSlideWeightlifting() {
  const totalItems = document.querySelectorAll(".weightlifting-item").length;
  currentWeigthLifting = (currentWeigthLifting - 1 + totalItems) % totalItems;
  showSlidesWeigthLifting();
}

const carouselContainerWeigthLifting = document.querySelector(
  ".weightlifting-container"
);
const hammerWeigthLifting = new Hammer(carouselContainerWeigthLifting);

hammerWeigthLifting.on("swipeleft", function () {
  nextSlideWeigthLifting();
});

hammerWeigthLifting.on("swiperight", function () {
  prevSlideWeightlifting();
});

//----SWIPER FOR ABOUT-----
let slideIndex = 1;
let touchStartX = 0;
let touchEndX = 0;

showSlides(slideIndex);

function nextSlide() {
  showSlides((slideIndex += 1));
}

function prevSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;
  handleGesture();
}

function handleGesture() {
  if (touchEndX < touchStartX) {
    nextSlide();
  } else if (touchEndX > touchStartX) {
    prevSlide();
  }
}

const slider = document.querySelector(".slider-container");
slider.addEventListener("touchstart", handleTouchStart, false);
slider.addEventListener("touchend", handleTouchEnd, false);
