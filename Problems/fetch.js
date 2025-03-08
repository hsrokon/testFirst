function fetchingByButton() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}


function fetchingUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => renderUsers(data))
}

function renderUsers(data) {
    const users = document.getElementById('users');
    users.innerHTML='';

    data.forEach((datum) => {
        const user = document.createElement('div');
        user.innerHTML=datum.name;

        users.appendChild(user);
    });
}