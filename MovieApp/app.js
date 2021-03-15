const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={{API_KEY}}&page=1';
const IMAGE_PATH = 'https://image.tmdb.org//t/p/w300';
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key={{API_KEY}}&query=';

const $form = document.querySelector('form');
const $search = document.querySelector('.search');
const $main = document.querySelector('main');

getMovies(API_URL);

async function getMovies(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
  } catch (e) {
    console.log(e);
  }
}

function showMovies(movies) {
  $main.innerHTML = '';
  movies.forEach((movie) => {
    const { title, overview, poster_path, vote_average } = movie;

    const $movie = document.createElement('div');
    $movie.className = 'movie';
    $movie.innerHTML = ` 
    <img
    src="${IMAGE_PATH}${poster_path}"
    alt="${title}"
     />
    <div class="movie-info">
        <h2>${title}</h2>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <h3>Overview</h3>
        <p>
        ${overview}
        </p>
    </div>`;
    $main.appendChild($movie);
  });
}

function getClassByRate(rate) {
  if (rate >= 8) return 'green';
  if (rate >= 5) return 'orange';
  return 'red';
}

$form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = $search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(`${SEARCH_URL}${searchTerm}`);

    searchTerm.value = '';
  } else {
    window.location.reload();
  }
});
