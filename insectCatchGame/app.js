const $screens = document.querySelectorAll('.screen');
const $startBtn = document.querySelector('#start-btn');
const $chooseInsectBtn = document.querySelectorAll('.choose-insect-btn');
const $gameContainer = document.querySelector('.game-container');
const $time = document.querySelector('#time');
const $score = document.querySelector('#score');
const $message = document.querySelector('#message');

let seconds = 0;
let score = 0;
let selected_insect = {};

$startBtn.addEventListener('click', (e) => {
  $screens[0].classList.add('up');
});

$chooseInsectBtn.forEach(($btn) => {
  $btn.addEventListener('click', () => {
    const $img = $btn.querySelector('img');
    const src = $img.getAttribute('src');
    const alt = $img.getAttribute('alt');
    selected_insect = { src, alt };
    $screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  $time.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

function createInsect() {
  const $insect = document.createElement('div');
  $insect.classList.add('insect');
  const { x, y } = getRandomLocation();
  $insect.style.top = `${y}px`;
  $insect.style.left = `${x}px`;
  $insect.innerHTML = `
  <img src="${selected_insect.src}" alt="${
    selected_insect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)" />
  `;
  $gameContainer.appendChild($insect);

  $insect.addEventListener('click', catchInsect);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.floor(Math.random() * (width - 200) + 100);
  const y = Math.floor(Math.random() * (height - 200) + 100);
  return { x, y };
}

function catchInsect() {
  increaseScore();
  this.classList.add('caught');
  setTimeout(() => {
    this.remove();
  }, 2000);
  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1000);
}

function increaseScore() {
  score++;
  $score.innerHTML = `Score: ${score}`;
  if (score > 19) {
    $message.classList.add('visible');
  }
}
