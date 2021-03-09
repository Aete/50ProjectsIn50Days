const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let interval = setInterval(blur, 30);

function blur() {
  load++;
  if (load > 99) clearInterval(interval);

  loadText.textContent = `${load}%`;
  loadText.style.opacity = (100 - load) / 100;
  bg.style.filter = `blur(${20 - load * 0.2}px)`;
}
