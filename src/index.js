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
