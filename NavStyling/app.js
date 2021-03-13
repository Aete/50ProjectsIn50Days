const $button = document.querySelector('.icon');
const $nav = document.querySelector('nav');
$button.addEventListener('click', (e) => {
  $nav.classList.toggle('active');
});
