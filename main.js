/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log('Test');

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnVGVzdCcpO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5sZXQgbGFzdFNjcm9sbFRvcCA9IDA7XG5cbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgc2Nyb2xsSGlkZSgpO1xufTtcblxuZnVuY3Rpb24gc2Nyb2xsSGlkZSgpIHtcbiAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgaWYgKHNjcm9sbFkgPiBsYXN0U2Nyb2xsVG9wKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfSBlbHNlIHtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9XG4gIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxZIDw9IDAgPyAwIDogc2Nyb2xsWTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==