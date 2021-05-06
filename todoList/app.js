const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $todos = document.querySelector('.todos');
const items = [];
const todos = JSON.parse(localStorage.getItem('todos'));

if (todos.length > 0) {
  todos.forEach((todo) => {
    addTodo(todo[0], todo[1]);
  });
}

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoText = $input.value;
  addTodo(todoText, false);
});

function addTodo(todoText, completed) {
  if (todoText) {
    const $item = document.createElement('li');
    $item.dataset.index = items.length;
    $item.textContent = todoText;
    if (completed) {
      $item.classList.add('completed');
      items.push([todoText, completed]);
    } else {
      items.push([todoText, completed]);
    }
    $todos.append($item);
  }
  $input.value = '';
  return;
}

$form.addEventListener('click', (e) => {
  const $target = e.target;
  if ($target.tagName === 'LI') {
    $target.classList.toggle('completed');
    const index = parseInt($target.dataset.index);
    items[index][1] = !items[index][1];
    return;
  }
});

$form.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  const $target = e.target;
  if ($target.tagName === 'LI') {
    $target.remove();
    const index = parseInt($target.dataset.index);
    items.splice(index, 1);
    return;
  }
});

window.addEventListener('beforeunload', (e) => {
  localStorage.setItem('todos', JSON.stringify(items));
});
