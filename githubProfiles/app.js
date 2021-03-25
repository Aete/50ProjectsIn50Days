const $main = document.querySelector('#main');
const $form = document.querySelector('#form');
const $search = document.querySelector('#search');

async function getUser(user) {
  try {
    const response = await fetch(`https://api.github.com/users/${user}`, {
      method: 'GET',
    });
    if (response.status !== 200) {
      throw response;
    }
    const json = await response.json();
    createUserCard(json);
    getRepos(user);
  } catch (error) {
    createErrorCard('No profile with that username');
  }
}

async function getRepos(user) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${user}/repos?sort=created`,
      {
        method: 'GET',
      }
    );
    if (response.status !== 200) {
      throw response;
    }
    const json = await response.json();
    addReposToCard(json);
  } catch (error) {
    createErrorCard('There was a problem to get repos. please retry');
  }
}

function createUserCard(userData) {
  const cardHTML = ` <article class="card">
    <div>
      <img
        class="avatar"
        src="${userData.avatar_url}"
        alt="${userData.name}"
      />
    </div>
    <div class="user-info">
      <h2>${userData.name}</h2>
      <p>${userData.bio}</p>
      <ul>
        <li>${userData.followers} <strong>Followers</strong></li>
        <li>${userData.following} <strong>Following</strong></li>
        <li>${userData.public_repos} <strong>Public Repos</strong></li>
      </ul>
      <div id="repos">
      </div>
    </div>
  </article>`;

  $main.innerHTML = cardHTML;
}

function addReposToCard(json) {
  const $repos = document.querySelector('#repos');
  json.slice(0, 11).forEach((repo) => {
    const $link = document.createElement('a');
    $link.classList.add('repo');
    $link.href = repo.html_url;
    $link.target = '_blank';
    $link.innerText = repo.name;
    $repos.appendChild($link);
  });
}

function createErrorCard(message) {
  const cardHTML = `
    <div class="card">
        <h1>${message}</h1>
    </div>
    `;
  $main.innerHTML = cardHTML;
}

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = $search.value;
  if (user) {
    getUser(user);
    $search.value = '';
  }
});
