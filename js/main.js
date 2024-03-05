const burger = document.querySelector(".header-center__burger");
const burgerMenu = document.querySelector(".header-center-mobile");
const arrowCatalog = document.querySelector(".catalog__btn");
const catalog = document.querySelector(".catalog");
const catalogElem = document.querySelectorAll(".catalog__element");
const clickElementMenu = document.querySelectorAll(".catalog__arrow-1");
const catalogMenu = document.querySelector(".catalog-menu");
const subCatalogMenu = document.querySelector(".catalog-menu-sub");
const catalogMenuSubEl = document.querySelectorAll(
  ".catalog-menu-sub__element"
);
const catalogMenuSubLink = document.querySelectorAll(".catalog-menu-sub__link");
const subSubMenu = document.querySelector(".catalog-menu-sub-sub");
const closeSubSubMenu = document.querySelector(".catalog-menu-sub-sub__btn");
const btnSubMenu = document.querySelector(".catalog-menu-sub__btn");

//----click burger and add classes to burger and burger menu
burger.addEventListener("click", function () {
  burger.classList.toggle("open");
  burgerMenu.classList.toggle("active");
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
