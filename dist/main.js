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
    console.log('checked');
    header.style.height = '240px';
  } else {
    console.log('not checked');
    header.style.height = '90px';
  }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVhZGVyIGhpZGVzIG9uIHNjcm9sbCBkb3duLCByZXZlYWxzIG9uIHNjcm9sbCB1cFxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xubGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xuXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHNjcm9sbEhpZGUoKTtcbn07XG5cbmZ1bmN0aW9uIHNjcm9sbEhpZGUoKSB7XG4gIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gIGlmIChzY3JvbGxZID4gbGFzdFNjcm9sbFRvcCkge1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH0gZWxzZSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfVxuICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsWSA8PSAwID8gMCA6IHNjcm9sbFk7XG59XG5cbi8vIFByb2plY3QgY2FyZCBob3ZlciBzaG93cyBHSUYgZm9yIHByb2plY3RcblxuY29uc3QgcHJvamVjdENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtY2FyZCcpO1xuXG5wcm9qZWN0Q2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBzaG93R0lGKTtcbiAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGlkZUdJRik7XG59KTtcblxuZnVuY3Rpb24gc2hvd0dJRihlKSB7XG4gIGNvbnN0IHRhcmdldENhcmQgPSBlLnRhcmdldDtcbiAgY29uc3QgZ2lmID0gdGFyZ2V0Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1naWYnKTtcbiAgY29uc3QgaW1nID0gdGFyZ2V0Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pbWcnKTtcblxuICBpZiAoZ2lmKSB7XG4gICAgaW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZ2lmLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZUdJRihlKSB7XG4gIGNvbnN0IHRhcmdldENhcmQgPSBlLnRhcmdldDtcbiAgY29uc3QgZ2lmID0gdGFyZ2V0Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1naWYnKTtcbiAgY29uc3QgaW1nID0gdGFyZ2V0Q2FyZC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pbWcnKTtcblxuICBpZiAoaW1nKSB7XG4gICAgZ2lmLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaW1nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH1cbn1cblxuLy8gSGFtYnVyZ2VyIG1lbnUgZnVuY3Rpb25hbGl0eVxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hhbWJ1cmdlci1pbnB1dCcpO1xuXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdHJhbnNmb3JtSGVhZGVyKTtcblxuZnVuY3Rpb24gdHJhbnNmb3JtSGVhZGVyKGUpIHtcbiAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgIGNvbnNvbGUubG9nKCdjaGVja2VkJyk7XG4gICAgaGVhZGVyLnN0eWxlLmhlaWdodCA9ICcyNDBweCc7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ25vdCBjaGVja2VkJyk7XG4gICAgaGVhZGVyLnN0eWxlLmhlaWdodCA9ICc5MHB4JztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9