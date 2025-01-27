// user fetch: https://api.github.com/search/users?q=${username}
// repo fetch: https://api.github.com/users/${username}/repos

const form = document.querySelector('#github-form');
const inputField = document.querySelector('#search');

const userList = document.querySelector('#user-list');
const reposList = document.querySelector('#repos-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.children[0].value);
})

function addUserList(data) {
    const div = document.createElement('div');
    div.style = 'display: flex;';
    div.innerHTML = `
    <h1>${data.name}</h1>
    <img src='${data.avatar}' style='width: 100px'/>
    <a href='${data.link}'>Visit ${data.name}'s page</a>

    `;

    userList.appendChild(div);
};
const testUser = { name: 'octoman', avatar: 'https://avatars.githubusercontent.com/u/583231?v=4', link: 'https://github.com/octocat' };

addUserList(testUser);