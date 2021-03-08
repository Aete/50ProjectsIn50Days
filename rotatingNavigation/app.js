const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const container = document.querySelector('.container');

openBtn.addEventListener('click', () => {
  container.classList.toggle('show-nav');
});

closeBtn.addEventListener('click', () => {
  container.classList.toggle('show-nav');
});
