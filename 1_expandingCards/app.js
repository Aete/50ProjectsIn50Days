const $container = document.querySelector('.container');

$container.addEventListener('click', (event) => {
  const $target = event.target;
  if ($target.classList.contains('active')) return;
  if (!$target.classList.contains('panel')) return;

  const $active = document.querySelector('.active');
  $active.classList.remove('active');
  $target.classList.add('active');
});
