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
