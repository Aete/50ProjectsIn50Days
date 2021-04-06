const $container = document.querySelector('.container');

const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
];

const numSquares = 600;

for (let i = 0; i < numSquares; i++) {
  const $square = document.createElement('div');
  $square.classList.add('square');

  $container.appendChild($square);
}

$container.addEventListener('mouseover', (e) => {
  if (!e.target.classList.contains('square')) {
    return;
  }
  const { target } = e;
  const color = colors[Math.floor(Math.random() * colors.length)];
  target.style.background = color;
  target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
});

$container.addEventListener('mouseout', (e) => {
  if (!e.target.classList.contains('square')) {
    return;
  }
  const { target } = e;
  target.style.background = '#212121';
  target.style.boxShadow = `0 0 2px #000`;
});
