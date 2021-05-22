window.addEventListener('resize', () => {
  checkWindowWidth();
  hamburgerNav.style.transition = 'none'
});

const navButtons = document.querySelectorAll('hamburger__nav-list a');
const landingText = document.querySelector('.landing');
const discoverButton = document.querySelector('.landing-text a');
const hamburgerIcon = document.querySelector('.fas.fa-bars');
const hamburgerClose = document.querySelector('.fas.fa-times');
const hamburgerNav = document.querySelector('.hamburger__nav');
const mainNav = document.querySelector('.main__navigation');
const landingGreeting = document.querySelector('.landing p');
const landingPage = document.querySelector('.landing');

discoverButton.addEventListener('click', () => {
  setTimeout(() => {
    if (window.innerWidth <= 1024) {
      landingPage.style.display = 'none';
    }
    discoverButton.style.display = 'none';
    landingGreeting.innerHTML = 'Arthur Temmerman';
    landingText.classList.add('afterclick');
  }, 500)
})

hamburgerIcon.addEventListener('click', () => {
  hamburgerNav.style.left = '0';
  hamburgerNav.style.transition = 'all 0.5s';

});

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

const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type method
TypeWriter.prototype.type = function() {
  // Current index of word
  const currentIndex = this.wordIndex % this.words.length;
  // Get full text of current word
  const currentWordText = this.words[currentIndex];

  // Check if deleting
  if (this.isDeleting) {
    // Remove char
    this.txt = currentWordText.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = currentWordText.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

  // Initial type speed
  let typeSpeed = 200;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.txt === currentWordText) {
    // Pauze at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 200;
  }

  setTimeout(() => this.type(), typeSpeed);
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init app
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  // Init typewriter
  new TypeWriter(txtElement, words, wait);
}