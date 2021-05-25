window.addEventListener('resize', () => {
  checkWindowWidth();
  hamburgerNav.style.transition = 'none'
});

const navButtons = document.querySelectorAll('hamburger__nav-list a');
const discoverButton = document.querySelector('.landing-text a');
const hamburgerIcon = document.querySelector('.fas.fa-bars');
const hamburgerClose = document.querySelector('.fas.fa-times');
const hamburgerNav = document.querySelector('.hamburger__nav');
const mainNav = document.querySelector('.main__navigation');

hamburgerIcon.addEventListener('click', () => {
  hamburgerNav.style.left = '0';
  hamburgerNav.style.transition = 'all 0.5s';
})

hamburgerClose.addEventListener('click', () => {
  hamburgerNav.style.left = '-100vw';
  hamburgerNav.style.transition = 'all 0.5s';
})

const checkWindowWidth = () => {
  if (window.innerWidth <= 1024) {
    hamburgerIcon.style.display = 'block';
    hamburgerNav.style.display = 'absolute';
    mainNav.style.display = 'none';
  } else {
    hamburgerIcon.style.display = 'none';
    mainNav.style.display = 'block';
  }
}

checkWindowWidth();