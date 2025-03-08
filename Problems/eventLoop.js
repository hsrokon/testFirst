//Callstack

function a() {
    console.log('a');
    b();
    console.log('aa');
}

function b() {
    console.log('b');
    c();
    console.log('bb');
}

function c() {
    console.log('c');
    console.log('cc');
}

function x() {
    console.log('x');
}

setTimeout(()=> {
    console.log('from inside Timeout');
}, 500) //setTimeout called at first but it comes at last, because of it's time delay

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))//fetch called at second but it comes at second last just before timeout, because of it's loading time

a();x(); //Called at last but comes at first - Event que happens
/* Callstack
a
b
c
cc
bb
aa
x
{userId: 1, id: 1, title: 'delectus aut autem', completed: false}
from inside Timeout
*/