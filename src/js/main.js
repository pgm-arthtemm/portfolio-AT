const details = document.querySelectorAll('.project-detail');
const projectTitles = document.querySelectorAll('.home-projects__list-item')

projectTitles.forEach(item => {
  item.addEventListener('click', () => {
    item.children[2].classList.toggle('open');
  })
})

// window.addEventListener('resize', () => {
//   checkWindowWidth();
//   // hamburgerNav.style.transition = 'none'
// });

// const navButtons = document.querySelectorAll('hamburger__nav-list a');
// const discoverButton = document.querySelector('.landing-text a');
// const hamburgerIcon = document.querySelector('.fas.fa-bars');
// const hamburgerClose = document.querySelector('.fas.fa-times');
// const hamburgerNav = document.querySelector('.hamburger__nav');
// const mainNav = document.querySelector('.main__navigation');

// // hamburgerNav.style.left = '-100vw';

// // hamburgerIcon.addEventListener('click', () => {
// //   hamburgerNav.style.left = '0';
// //   hamburgerNav.style.transition = 'all 0.5s';
// // })

// // hamburgerClose.addEventListener('click', () => {
// //   hamburgerNav.style.left = '-100vw';
// //   hamburgerNav.style.transition = 'all 0.5s';
// // })

// const checkWindowWidth = () => {
//   if (window.innerWidth <= 1024) {
//     hamburgerIcon.style.display = 'block';
//     // hamburgerNav.style.display = 'absolute';
//     mainNav.style.display = 'none';
//   } else {
//     hamburgerIcon.style.display = 'none';
//     mainNav.style.display = 'block';
//   }
// }

// checkWindowWidth();