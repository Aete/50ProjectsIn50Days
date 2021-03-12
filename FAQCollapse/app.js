const $container = document.querySelector('.faq-container');

$container.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  const parent = e.target.parentNode;
  parent.classList.toggle('active');
});
