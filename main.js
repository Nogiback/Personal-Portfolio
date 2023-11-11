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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhlYWRlciBoaWRlcyBvbiBzY3JvbGwgZG93biwgcmV2ZWFscyBvbiBzY3JvbGwgdXBcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbmxldCBsYXN0U2Nyb2xsVG9wID0gMDtcblxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICBzY3JvbGxIaWRlKCk7XG59O1xuXG5mdW5jdGlvbiBzY3JvbGxIaWRlKCkge1xuICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuICBpZiAoc2Nyb2xsWSA+IGxhc3RTY3JvbGxUb3ApIHtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9IGVsc2Uge1xuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH1cbiAgbGFzdFNjcm9sbFRvcCA9IHNjcm9sbFkgPD0gMCA/IDAgOiBzY3JvbGxZO1xufVxuXG4vLyBQcm9qZWN0IGNhcmQgaG92ZXIgc2hvd3MgR0lGIGZvciBwcm9qZWN0XG5cbmNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWNhcmQnKTtcblxucHJvamVjdENhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgc2hvd0dJRik7XG4gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZGVHSUYpO1xufSk7XG5cbmZ1bmN0aW9uIHNob3dHSUYoZSkge1xuICBjb25zdCB0YXJnZXRDYXJkID0gZS50YXJnZXQ7XG4gIGNvbnN0IGdpZiA9IHRhcmdldENhcmQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZ2lmJyk7XG4gIGNvbnN0IGltZyA9IHRhcmdldENhcmQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaW1nJyk7XG5cbiAgaWYgKGdpZikge1xuICAgIGltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGdpZi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhpZGVHSUYoZSkge1xuICBjb25zdCB0YXJnZXRDYXJkID0gZS50YXJnZXQ7XG4gIGNvbnN0IGdpZiA9IHRhcmdldENhcmQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZ2lmJyk7XG4gIGNvbnN0IGltZyA9IHRhcmdldENhcmQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaW1nJyk7XG5cbiAgaWYgKGltZykge1xuICAgIGdpZi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGltZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=