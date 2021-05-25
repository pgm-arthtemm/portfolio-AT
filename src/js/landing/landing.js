const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

const loader = new THREE.TextureLoader();
const star = loader.load('./assets/img/star.png');

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0x111111))
camera.position.setZ(1.5);
camera.position.setX(0);

// Mouse
document.addEventListener('mousemove', animateParticles);

let mouseX = 0;
let mouseY = 0

function animateParticles(event) {
  mouseX = event.clientY;
  mouseY = event.clientX;
}

const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

const particlesGeometry = new THREE.BufferGeometry;
const particlesCnt = 5000;

const torusGeometry = new THREE.TorusGeometry(0.7, 0.17, 10, 20);
const torusMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true
});
const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);

const posArray = new Float32Array(particlesCnt * 3);

for(let i = 0; i < particlesCnt * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 6.5;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// Material
const material = new THREE.PointsMaterial({
  size: 0.005,
  map: star,
  transparent: true
})

const particlesMesh = new THREE.Points(particlesGeometry, material);
scene.add(torusMesh, particlesMesh);


// Animate function
const clock = new THREE.Clock();

function animate() {
  const elapsedTime = clock.getElapsedTime();
  particlesMesh.rotation.y = -0.1 * elapsedTime;

  torusMesh.rotation.z += 0.001

  if (mouseX > 0) {
    particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008);
    particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00008);
  }


  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}
animate();

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () =>
{
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

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