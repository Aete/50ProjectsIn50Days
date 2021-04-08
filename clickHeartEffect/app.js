const $loveMe = document.querySelector('.loveMe');
const $times = document.querySelector('#times');

let clickTime = 0;
let timeClicked = 0;

$loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function createHeart(e) {
  const $heart = document.createElement('i');
  $heart.classList.add('fas');
  $heart.classList.add('fa-heart');

  const { clientX: x, clientY: y } = e;
  const { offsetLeft, offsetTop } = e.target;

  $heart.style.top = `${y - offsetTop}px`;
  $heart.style.left = `${x - offsetLeft}px`;

  $times.innerHTML = ++timeClicked;

  $loveMe.appendChild($heart);
  setTimeout(() => {
    $heart.remove();
  }, 1000);
}
