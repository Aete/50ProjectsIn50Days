const $button = document.querySelector('#button');
const $toasts = document.querySelector('#toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

const types = ['info', 'success', 'error'];

$button.addEventListener('click', createNotification);

function createNotification() {
  const message = messages[Math.floor(Math.random() * messages.length)];
  const type = types[Math.floor(Math.random() * types.length)];
  const $toast = document.createElement('div');
  $toast.classList.add('toast');
  $toast.classList.add(type);
  $toast.innerHTML = message;
  $toasts.appendChild($toast);

  setTimeout(() => {
    $toast.remove();
  }, 3000);
}
