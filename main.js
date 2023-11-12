/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// Header hides on scroll down, reveals on scroll up
const header = document.querySelector('#header');
let lastScrollTop = 0;

window.onscroll = function () {
  scrollHide();
};

function scrollHide() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  if (scrollY > lastScrollTop) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  lastScrollTop = scrollY <= 0 ? 0 : scrollY;
}

// Project card hover shows GIF for project

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
  card.addEventListener('mouseenter', showGIF);
  card.addEventListener('mouseleave', hideGIF);
});

function showGIF(e) {
  const targetCard = e.target;
  const gif = targetCard.querySelector('.project-gif');
  const img = targetCard.querySelector('.project-img');

  if (gif) {
    img.style.display = 'none';
    gif.style.display = 'flex';
  }
}

function hideGIF(e) {
  const targetCard = e.target;
  const gif = targetCard.querySelector('.project-gif');
  const img = targetCard.querySelector('.project-img');

  if (img) {
    gif.style.display = 'none';
    img.style.display = 'flex';
  }
}

// Hamburger menu functionality
const hamburger = document.querySelector('#hamburger-input');

hamburger.addEventListener('change', transformHeader);

function transformHeader(e) {
  if (this.checked) {
    header.style.height = '240px';
  } else {
    header.style.height = '90px';
  }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWFkZXIgaGlkZXMgb24gc2Nyb2xsIGRvd24sIHJldmVhbHMgb24gc2Nyb2xsIHVwXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5sZXQgbGFzdFNjcm9sbFRvcCA9IDA7XG5cbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgc2Nyb2xsSGlkZSgpO1xufTtcblxuZnVuY3Rpb24gc2Nyb2xsSGlkZSgpIHtcbiAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgaWYgKHNjcm9sbFkgPiBsYXN0U2Nyb2xsVG9wKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfSBlbHNlIHtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9XG4gIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxZIDw9IDAgPyAwIDogc2Nyb2xsWTtcbn1cblxuLy8gUHJvamVjdCBjYXJkIGhvdmVyIHNob3dzIEdJRiBmb3IgcHJvamVjdFxuXG5jb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1jYXJkJyk7XG5cbnByb2plY3RDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHNob3dHSUYpO1xuICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoaWRlR0lGKTtcbn0pO1xuXG5mdW5jdGlvbiBzaG93R0lGKGUpIHtcbiAgY29uc3QgdGFyZ2V0Q2FyZCA9IGUudGFyZ2V0O1xuICBjb25zdCBnaWYgPSB0YXJnZXRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdpZicpO1xuICBjb25zdCBpbWcgPSB0YXJnZXRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWltZycpO1xuXG4gIGlmIChnaWYpIHtcbiAgICBpbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBnaWYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWRlR0lGKGUpIHtcbiAgY29uc3QgdGFyZ2V0Q2FyZCA9IGUudGFyZ2V0O1xuICBjb25zdCBnaWYgPSB0YXJnZXRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdpZicpO1xuICBjb25zdCBpbWcgPSB0YXJnZXRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWltZycpO1xuXG4gIGlmIChpbWcpIHtcbiAgICBnaWYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpbWcuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfVxufVxuXG4vLyBIYW1idXJnZXIgbWVudSBmdW5jdGlvbmFsaXR5XG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFtYnVyZ2VyLWlucHV0Jyk7XG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0cmFuc2Zvcm1IZWFkZXIpO1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm1IZWFkZXIoZSkge1xuICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgaGVhZGVyLnN0eWxlLmhlaWdodCA9ICcyNDBweCc7XG4gIH0gZWxzZSB7XG4gICAgaGVhZGVyLnN0eWxlLmhlaWdodCA9ICc5MHB4JztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9