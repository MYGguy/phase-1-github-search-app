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
                const li = document.createElement('li');
                li.innerHTML = `
                <h1>${data[i].login}</h1>
                <img src='${data[i].avatar_url}' style='width: 100px'/></br>
                
                <a onclick='addRepoToDom(event, "${data[i].login}")'>See ${data[i].login}'s repos</a></br>
                <a href='${data[i].html_url}'>Visit ${data[i].login}'s page</a>
                `;

                userList.appendChild(li);
            }
        })
};

function addRepoToDom(event, username) {
    event.preventDefault();

    const configObject = {
        method: 'GET',
        headers: {
            'Content-Type': 'application / json',
            'Accept': 'application/vnd.github.v3+json'
        }
    }

    fetch(`https://api.github.com/users/${username}/repos`, configObject)
        .then(res => res.json())
        .then(json => {
            data = json;
            // reposList.textContent = '';
            reposList.innerHTML = `<h1 style='color: blue; '>${username}'s repos:</h1 >`;

            for (i = 0; i <= 4; i++) {
                const li = document.createElement('li');
                li.innerHTML = `
                <h2>${data[i].name}</h2>
                <a href='${data[i].html_url}'>View this repo</a>
                `;

                reposList.appendChild(li);
            }
        })
}