const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    search.classList.remove('active');
  }
});
