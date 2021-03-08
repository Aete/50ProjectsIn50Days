const progress = document.querySelector('#progress');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click', (e) => {
  currentActive++;
  if (currentActive > 1) prevBtn.disabled = false;
  if (currentActive === circles.length) nextBtn.disabled = true;
  update();
});

prevBtn.addEventListener('click', (e) => {
  currentActive--;
  if (currentActive === 1) prevBtn.disabled = true;
  if (currentActive < circles.length) nextBtn.disabled = false;
  update();
});

function update() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  progress.style.width = `${
    ((currentActive - 1) / (circles.length - 1)) * 100
  }%`;
}
