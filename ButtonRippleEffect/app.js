const $button = document.querySelector('.ripple');
const { offsetTop, offsetLeft } = $button;

$button.addEventListener('click', (e) => {
  const x = e.clientX - offsetLeft;
  const y = e.clientY - offsetTop;
  const $circle = document.createElement('span');
  $circle.className = 'circle';
  $circle.style.top = `${y}px`;
  $circle.style.left = `${x}px`;
  $button.appendChild($circle);
  setTimeout(() => {
    $circle.remove();
  }, 500);
});
