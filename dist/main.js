/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// DOM elements and initial values
const header = document.querySelector('#header');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const hamburgerCheckbox = document.querySelector('#hamburger-input');
const sidebarMenu = document.querySelector('#sidebar-menu');
const projectCards = document.querySelectorAll('.project-card');
let lastScrollTop = 0;

// Header hides on scroll down, reveals on scroll up
window.onscroll = function () {
  scrollHide();
};

function scrollHide() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  if (scrollY > lastScrollTop) {
    header.classList.add('hide');
    hamburgerMenu.classList.add('hide');
    sidebarMenu.classList.add('hide');
    hamburgerCheckbox.checked = false;
    transformHeader();
  } else {
    header.classList.remove('hide');
    hamburgerMenu.classList.remove('hide');
    sidebarMenu.classList.remove('hide');
    hamburgerCheckbox.checked = false;
    transformHeader();
  }
  lastScrollTop = scrollY <= 0 ? 0 : scrollY;
}

// Project card hover shows GIF for project
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

hamburgerCheckbox.addEventListener('change', transformHeader);

function transformHeader() {
  if (hamburgerCheckbox.checked === true) {
    header.style.height = '240px';
  } else {
    header.style.height = '90px';
  }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERPTSBlbGVtZW50cyBhbmQgaW5pdGlhbCB2YWx1ZXNcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbmNvbnN0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFtYnVyZ2VyLW1lbnUnKTtcbmNvbnN0IGhhbWJ1cmdlckNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hhbWJ1cmdlci1pbnB1dCcpO1xuY29uc3Qgc2lkZWJhck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhci1tZW51Jyk7XG5jb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1jYXJkJyk7XG5sZXQgbGFzdFNjcm9sbFRvcCA9IDA7XG5cbi8vIEhlYWRlciBoaWRlcyBvbiBzY3JvbGwgZG93biwgcmV2ZWFscyBvbiBzY3JvbGwgdXBcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgc2Nyb2xsSGlkZSgpO1xufTtcblxuZnVuY3Rpb24gc2Nyb2xsSGlkZSgpIHtcbiAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgaWYgKHNjcm9sbFkgPiBsYXN0U2Nyb2xsVG9wKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgaGFtYnVyZ2VyQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRyYW5zZm9ybUhlYWRlcigpO1xuICB9IGVsc2Uge1xuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGhhbWJ1cmdlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0cmFuc2Zvcm1IZWFkZXIoKTtcbiAgfVxuICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsWSA8PSAwID8gMCA6IHNjcm9sbFk7XG59XG5cbi8vIFByb2plY3QgY2FyZCBob3ZlciBzaG93cyBHSUYgZm9yIHByb2plY3RcbnByb2plY3RDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHNob3dHSUYpO1xuICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoaWRlR0lGKTtcbn0pO1xuXG5mdW5jdGlvbiBzaG93R0lGKGUpIHtcbiAgY29uc3QgdGFyZ2V0Q2FyZCA9IGUudGFyZ2V0O1xuICBjb25zdCBnaWYgPSB0YXJnZXRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdpZicpO1xuICBjb25zdCBpbWcgPSB0YXJnZXRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWltZycpO1xuXG4gIGlmIChnaWYpIHtcbiAgICBpbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBnaWYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWRlR0lGKGUpIHtcbiAgY29uc3QgdGFyZ2V0Q2FyZCA9IGUudGFyZ2V0O1xuICBjb25zdCBnaWYgPSB0YXJnZXRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdpZicpO1xuICBjb25zdCBpbWcgPSB0YXJnZXRDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWltZycpO1xuXG4gIGlmIChpbWcpIHtcbiAgICBnaWYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpbWcuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfVxufVxuXG4vLyBIYW1idXJnZXIgbWVudSBmdW5jdGlvbmFsaXR5XG5cbmhhbWJ1cmdlckNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRyYW5zZm9ybUhlYWRlcik7XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUhlYWRlcigpIHtcbiAgaWYgKGhhbWJ1cmdlckNoZWNrYm94LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICBoZWFkZXIuc3R5bGUuaGVpZ2h0ID0gJzI0MHB4JztcbiAgfSBlbHNlIHtcbiAgICBoZWFkZXIuc3R5bGUuaGVpZ2h0ID0gJzkwcHgnO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=