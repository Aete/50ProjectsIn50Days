const $password = document.querySelector('#password');
const $background = document.querySelector('#background');

$password.addEventListener('input', (e) => {
  const length = e.target.value.length;
  $background.style.filter = `blur(${10 - length > 0 ? 10 - length : 0}px)`;
});
