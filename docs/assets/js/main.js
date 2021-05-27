const details = document.querySelectorAll('.project-detail');
const projectTitles = document.querySelectorAll('.home-projects__list-item')

projectTitles.forEach(item => {
  item.addEventListener('click', () => {
    item.children[2].classList.toggle('open');
  })
})

window.addEventListener('resize', () => {
  checkWindowWidth();
  hamburgerNav.style.transition = 'none'
});

const hamburgerIcon = document.querySelector('.fas.fa-bars');
const hamburgerClose = document.querySelector('.fas.fa-times');
const hamburgerNav = document.querySelector('.hamburger__nav');
const mainNav = document.querySelector('.main__navigation');
const mobileLogo = document.querySelector('.hamburger__menu-heading a');
const hamburgerMenuItems = document.querySelectorAll('.hamburger__nav-list li');

// Hide hamburger menu after clicking on menu item.
// Added 0.5 seconds delay to wait for page change.
hamburgerMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    setTimeout(() => {
      hamburgerNav.style.display = 'none';
    }, 500);
  })
})

hamburgerIcon.addEventListener('click', () => {
  hamburgerNav.style.display = 'block';
});

hamburgerClose.addEventListener('click', () => {
  hamburgerNav.style.display = 'none';
})

const checkWindowWidth = () => {
  if (window.innerWidth <= 1024) {
    hamburgerIcon.style.display = 'block';
    hamburgerNav.style.display = 'absolute';
    mainNav.style.display = 'none';
    mobileLogo.style.display = 'block';
  } else {
    hamburgerIcon.style.display = 'none';
    mainNav.style.display = 'block';
    mobileLogo.style.display = 'none';
  }
}

checkWindowWidth();