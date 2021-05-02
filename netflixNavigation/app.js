const $navs = document.querySelectorAll('.nav');
const $openBtn = document.querySelector('.open-btn');
const $closeBtn = document.querySelector('.close-btn');

$openBtn.addEventListener('click', toggleNav);
$closeBtn.addEventListener('click', toggleNav);

function toggleNav(e) {
  $navs.forEach(($nav) => {
    $nav.classList.toggle('visible');
  });
}
