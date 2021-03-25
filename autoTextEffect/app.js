const $text = document.querySelector('#text');
const $speed = document.querySelector('#speed');
const text = 'We Love Programming!';
let idx = 1;
let speed = 300 / $speed.value;

writeText();

function writeText() {
  if (idx > text.length) {
    idx = 1;
  }
  $text.innerText = text.slice(0, idx);
  idx++;

  setTimeout(writeText, speed);
}

$speed.addEventListener('input', (e) => {
  speed = 300 / e.target.value;
});
