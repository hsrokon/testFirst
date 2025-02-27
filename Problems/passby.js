let num1 = 4;
let num2 = 5;

function passBy(a, b) {
    a = 7;
    const multiply = a * b;
    return multiply;
}
//Primitive types are passed by value, when passed into fun it creates a copy of it
console.log(num1);
const var1 = passBy(num1, num2);//after calling the function, variable does not change
console.log(num1);



let object1 = {name:"Zahir", is:"student"};
let object2 = {name:"Raihan", is:"teacher"};

function passBy1(a, b) {
    object1.name = "Abrar";
    object2.name = "Hasan";
}
//Non-primitive types are passed by reference, when passed into a fun it indicates the same ref without creating a copy

console.log(object1, object2);//{ name: 'Zahir', is: 'student' } { name: 'Raihan', is: 'teacher' }
const var2 = passBy1(object1, object2);//after calling the function, variable changes because of change in reference
console.log(object1, object2);//{ name: 'Abrar', is: 'student' } { name: 'Hasan', is: 'teacher' }