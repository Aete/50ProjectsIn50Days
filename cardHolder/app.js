const $header = document.querySelector('#header');
const $title = document.querySelector('#title');
const $excerpt = document.querySelector('#excerpt');
const $profile_img = document.querySelector('#profile_img');
const $name = document.querySelector('#name');
const $date = document.querySelector('#date');

const $animated_bgs = document.querySelectorAll('.animated-bg');
const $animated_bg_texts = document.querySelectorAll('.animated-bg-text');

function getData() {
  $header.innerHTML = `<img
    src="https://images.unsplash.com/photo-1493406300581-484b937cdc41?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
    alt="header image"
  />`;

  $title.innerHTML = ' Lorem ipsum dolor sit amet.';
  $excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, suscipit.';

  $profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/40.jpg" alt="profile image" />';

  $name.innerHTML = 'John Doe';
  $date.innerHTML = 'Mar 19, 2020';
}

setTimeout(() => {
  getData();
  $animated_bgs.forEach((bg) => {
    bg.classList.remove('animated-bg');
  });
  $animated_bg_texts.forEach((textNode) => {
    textNode.classList.remove('animated-bg-text');
  });
}, 2500);
