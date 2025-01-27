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
        },
        // body: JSON.stringify({
        //     name: 'data.name',
        //     avatar: 'data.avatar',
        //     link: 'data.link',
        // })
    }
    fetch(`https://api.github.com/search/users?q=${username}`, configObject)
        .then(res => res.json())
        .then(json => {
            data = json.items;

            const div = document.createElement('div');
            div.style = 'display: flex;';
            div.innerHTML = `
            <h1>${data[0].login}</h1>
            <img src='${data[0].avatar_url}' style='width: 100px'/>
            <a href='${data[0].html_url}'>Visit ${data[0].login}'s page</a>
            `;

            userList.appendChild(div);
        })
};