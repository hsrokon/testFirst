function fetchUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => console.log(users))
    .catch(err => console.log(err))
}


async function fetchUser1() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);
}

const aFun = async ()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);
};

async function fetchUser3() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        console.log(users);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('All way fetch done');
    }
}