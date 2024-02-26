const burger = document.querySelector(".header-center__burger");
const burgerMenu = document.querySelector(".header-center-mobile");
const arrowCatalog = document.querySelector(".catalog__btn");
const catalogElement = document.querySelector(".catalog");
const clickElementMenu = document.querySelectorAll(".catalog__arrow-1");
const subCatalogMenu = document.querySelectorAll(".catalog-menu-sub");

//----click burger and add classes to burger and burger menu
burger.addEventListener("click", function () {
  burger.classList.toggle("open");
  burgerMenu.classList.toggle("active");
});
console.log(burger);

//click arrow Catalog
arrowCatalog.addEventListener("click", function () {
  catalogElement.classList.toggle("open");
});

////click subMenu catalog
//for (let i = 0; i < clickElementMenu.length; i++) {
//  clickElementMenu[i].addEventListener("click", function () {
//    this.classList.toggle("open-sub-menu");
//    //subCatalogMenu[i].classList.toggle("open-sub-sub-menu");
//    const nextEl = clickElementMenu[i].nextElementSibling;
//    nextEl.classList.toggle("open-sub-sub-menu");
//  });
//}
