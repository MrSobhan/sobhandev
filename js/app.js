const $ = document;
AOS.init({
  easing: "ease-in-out-sine",
});

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("من <سبحان /> هستم")
  .pauseFor(2500)
  .deleteChars(14)
  .typeString("<فرانت اند دولوپر /> هستم")
  .pauseFor(2500)
  .deleteChars(26)
  .typeString("<برنامه نویس /> هستم")
  .pauseFor(2500)
  .start();

const btnDark = $.getElementById("dark");
const btnLight = $.getElementById("light");

window.addEventListener("load", () => {
  if (localStorage.getItem("them") == "dark") {
    $.documentElement.classList.add("dark");
  } else {
    $.documentElement.classList.remove("dark");
  }
});

btnDark.addEventListener("click", () => {
  localStorage.setItem("them", "dark");
  $.documentElement.classList.add("dark");
});
btnLight.addEventListener("click", () => {
  localStorage.setItem("them", "light");
  $.documentElement.classList.remove("dark");
});

var swiper = new Swiper(".swiper-container", {
  scrollbar: ".swiper-scrollbar",
  scrollbarHide: true,
  slidesPerView: "auto",
  freeMode: true,
  freeModeSticky: true,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
});
