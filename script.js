const btn = document.querySelector(".button");
const text = document.querySelectorAll(".navbar__items__item__link__text")
const logoText = document.querySelectorAll(".navbar__items__logo__logo-text")
const navbar = document.querySelector(".navbar");
const navbarItems = document.querySelector(".navbar__items");
const main = document.querySelector("main");
const navbarToggle = document.querySelector(".navbar__toggle");
const phoneMediaQuery = window.matchMedia("(max-width: 320px)")

btn.addEventListener("click", addActive, ()=>{});

function addActive() {
  btn.classList.toggle("active");
  logoText.forEach(i => {i.classList.toggle("show-text")});
  navbarItems.classList.toggle("navbar-items-open");
  if (phoneMediaQuery.matches) { 
    main.classList.toggle("main-open-phone")
    navbar.classList.toggle("navbar-open-phone")
    navbarToggle.classList.toggle("navbar__toggle-open-phone")
    navbarItems.classList.toggle("navbar__items-open-phone")
    text.forEach(i => {i.classList.toggle("show-text-phone")});
  } else {
    main.classList.toggle("main-open")
    navbar.classList.toggle("navbar-open")
    navbarToggle.classList.toggle("navbar__toggle-open")
    navbarItems.classList.toggle("navbar__items-open")
    text.forEach(i => {i.classList.toggle("show-text")});
  }
}

