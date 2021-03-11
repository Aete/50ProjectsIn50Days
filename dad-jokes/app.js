const $joke = document.getElementById('joke');
const $jokeBtn = document.getElementById('jokeBtn');

const API = 'https://icanhazdadjoke.com';
const config = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
};

async function generateJoke() {
  try {
    const response = await fetch(API, config);
    const data = await response.json();
    $joke.textContent = data.joke;
  } catch (e) {
    console.log(e);
    alert('Error!, Please try again.');
  }
}

generateJoke();

$jokeBtn.addEventListener('click', generateJoke);
