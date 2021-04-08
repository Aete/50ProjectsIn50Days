const $smallCups = document.querySelectorAll('.cup-small');
const $litters = document.querySelector('.litters');
const $percentage = document.querySelector('.percentage');
const $percentageText = document.querySelector('.percentage span');
const $remained = document.querySelector('.remained');
const state = {};

if (localStorage.getItem('water')) {
  state.water = +localStorage.getItem('water');
} else {
  state.water = 5;
  localStorage.setItem('water', 5);
}

initializeCup(state);

$smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', function (event) {
    highlightCups(this);
    if (cup.classList.contains('full')) {
      updateWater(1);
    } else {
      updateWater(-1);
    }
    updateBigCup();
  });
});

function highlightCups(cup) {
  cup.classList.toggle('full');
}

function updateWater(amount) {
  state.water += amount;
  localStorage.setItem('water', state.water);
}

function initializeCup(state) {
  $smallCups.forEach((cup, idx) => {
    if (idx + 1 <= state.water) {
      highlightCups(cup);
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const $fullCups = document.querySelectorAll('.cup-small.full');

  if ($fullCups.length === 0) {
    $percentage.style.visibility = 'hidden';
    $percentage.style.height = 0;
  } else {
    $percentage.style.visibility = 'visible';
    $percentage.style.height = `${
      ($fullCups.length / $smallCups.length) * 330
    }px`;
    $percentageText.textContent = `${
      ($fullCups.length / $smallCups.length) * 100
    }%`;
  }
  if ($fullCups.length === $smallCups.length) {
    $remained.style.visibility = 'hidden';
    $remained.style.height = 0;
  } else {
    $remained.style.visibility = 'visible';
    $litters.textContent = `${2 - (250 * $fullCups.length) / 1000} ml`;
  }
}
