// Header hides on scroll down, reveals on scroll up
const header = document.querySelector('#header');
const hamburgerMenu = document.querySelector('#hamburger-menu');
let lastScrollTop = 0;

window.onscroll = function () {
  scrollHide();
};

function scrollHide() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  if (scrollY > lastScrollTop) {
    header.classList.add('hide');
    hamburgerMenu.classList.add('hide');
  } else {
    header.classList.remove('hide');
    hamburgerMenu.classList.remove('hide');
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
