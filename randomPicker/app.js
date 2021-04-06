const $tags = document.querySelector('#tags');
const $textarea = document.querySelector('#textarea');

$textarea.focus();

$textarea.addEventListener('keyup', (e) => {
  createTag(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});

function createTag(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
  $tags.innerHTML = '';
  tags.forEach((tag) => {
    const $tag = document.createElement('span');
    $tag.classList.add('tag');
    $tag.textContent = tag;
    $tags.appendChild($tag);
  });
}

function randomSelect() {
  const times = 30;

  const timeInterval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(timeInterval);
    const randomTag = pickRandomTag();
    setTimeout(() => {
      highlightTag(randomTag);
    });
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight');
}
