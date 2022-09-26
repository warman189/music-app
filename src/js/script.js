var burgerBtn = document.querySelector(".burger__");
var burgerNav = document.querySelector(".burger__menu");
var hideNavMenu = document.querySelector(".close");
var inputFinder = document.querySelector(".search__btn");
var mainContent = document.querySelector(".wrapper__content");

burgerBtn.addEventListener("click", (_) => {
  burgerNav.classList.toggle("menu__show");
  burgerNav.style.pointerEvents = "auto";
  burgerBtn.style.pointerEvents = "auto";
  mainContent.classList.toggle("content__");
});

function toggleMenu() {
  if (burgerBtn) {
    if (burgerBtn.classList.contains("burger__toggle")) {
      burgerBtn.classList.remove("burger__toggle");
    } else {
      burgerBtn.classList.add("burger__toggle");
    }
  }
}
function showSearchBar() {
  searchBtn.classList.toggle("show__");
  inputFinder.classList.toggle("show__");
}

// navigation buttons for player

const artistSong = document.querySelectorAll(".artists__box");
const musicBar = document.querySelector(".music__player");
const playBtn = document.querySelector(".play__btn");
const toggleDark = document.querySelector(".toggle__theme");

playBtn.addEventListener("click", function playPause() {
  let audio = new Audio();
  if (playBtn) {
    playBtn.classList.toggle("pause__");
    audio.play();
    console.log("play");
  } else if (playBtn) {
    audio.pause();
    console.log("pause");
  }
});

toggleDark.addEventListener("click", (_) => {
  burgerBtn.classList.toggle("burger__dark");
  burgerNav.classList.toggle("menu__dark");
  console.log("changed!");
  changedTheme();
});

let headerDrk = document.querySelector(".wrapper__header");
let bodyDrk = document.querySelector(".wrapper__body");
let searchBtn = document.querySelector(".search__input");

function changedTheme() {
  headerDrk.classList.toggle("wrapper__header__dark");
  bodyDrk.classList.toggle("wrapper__body__dark");
  searchBtn.classList.toggle("search__input__light");
  musicBar.classList.toggle("music__player__dark");
  console.log("funct test");
}
