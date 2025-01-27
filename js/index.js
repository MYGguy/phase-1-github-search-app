// user fetch: https://api.github.com/search/users?q=${username}
// repo fetch: https://api.github.com/users/${username}/repos

const form = document.querySelector('#github-form');
const inputField = document.querySelector('#search');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.children[0].value);
})