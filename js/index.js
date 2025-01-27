// user fetch: https://api.github.com/search/users?q=${username}
// repo fetch: https://api.github.com/users/${username}/repos

const form = document.querySelector('#github-form');
const inputField = document.querySelector('#search');

const userList = document.querySelector('#user-list');
const reposList = document.querySelector('#repos-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(event.target.children[0].value);

    addUserList(event.target.children[0].value)
})

function addUserList(username) {
    let data = {};
    const configObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application / json',
            'Accept': 'application/vnd.github.v3+json'
        }
    }
    fetch(`https://api.github.com/search/users?q=${username}`, configObject)
        .then(res => res.json())
        .then(json => {
            data = json.items;

            for (i = 0; i <= 4; i++) {
                const div = document.createElement('div');
                div.style = 'display: block-flex; text-align: left;';
                div.innerHTML = `
                <h1>${data[i].login}</h1>
                <img src='${data[i].avatar_url}' style='width: 100px'/>
                <a href='${data[i].html_url}'>Visit ${data[i].login}'s page</a>
                `;

                userList.appendChild(div);
            }
        })
};