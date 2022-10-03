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
  if (burgerBtn) {
    if (burgerBtn.classList.contains("burger__toggle")) {
      burgerBtn.classList.remove("burger__toggle");
    } else {
      burgerBtn.classList.add("burger__toggle");
    }
  }
});

var searchToggle = document.querySelector(".search__ico");
searchToggle.addEventListener("click", (_) => {
  searchBtn.classList.toggle("show__");
  inputFinder.classList.toggle("show__");
});

// navigation buttons for player

const artistSong = document.querySelectorAll(".artists__box");
const musicBar = document.querySelector(".music__player");
const toggleDark = document.querySelector(".toggle__theme");

toggleDark.addEventListener("click", (_) => {
  burgerBtn.classList.toggle("burger__dark");
  burgerNav.classList.toggle("menu__dark");
  console.log("changed!");
  changedTheme();
  changeIcons();
});

let headerDrk = document.querySelector(".wrapper__header");
let bodyDrk = document.querySelector(".wrapper__body");
let searchBtn = document.querySelector(".search__input");

function changedTheme() {
  headerDrk.classList.toggle("wrapper__header__dark");
  bodyDrk.classList.toggle("wrapper__body__dark");
  musicBar.classList.toggle("music__player__dark");
}

function changeIcons() {
  const prevBtn = document.querySelector(".prev__btn");
  const playBtn = document.querySelector(".play__");
  const nextBtn = document.querySelector(".next__btn__ico");
  searchToggle.src = searchToggle.src.replace(
    "/src/icons/search/search__.png",
    "/src/icons/search/search__light.png"
  );
  prevBtn.src = prevBtn.src.replace(
    "/src/icons/nav-player/next.png",
    "/src/icons/nav-player/light/previous_light.png"
  );
  playBtn.src = playBtn.src.replace(
    "/src/icons/nav-player/play-button.png",
    "/src/icons/nav-player/light/play_light.png"
  );
  nextBtn.src = nextBtn.src.replace(
    "/src/icons/nav-player/next.png",
    "/src/icons/nav-player/light/previous_light.png" // reversed, idk why
  );
}

// nav for buttons //

const playerContent = document.querySelector(".current__audio");
const prevBtn = document.querySelector(".prev__btn");
const playBtn = document.querySelector(".play__btn");
const nextBtn = document.querySelector(".next__btn__ico");
let count = 0;

function playPause() {
  if (count == 0) {
    count = 1;
    playerContent.play();
  } else {
    count = 0;
    playerContent.pause();
  }
}

playBtn.onclick = function () {
  playPause();
};
