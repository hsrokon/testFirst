const object1 = {
    name : 'Mr. Water',
    age: 34,
    location : 'Ohio'
}

const {name, age, location :jaiga}= object1;
console.log(name);
console.log(age);
// console.log(location);
console.log(jaiga);//elias or give the var a different name

const array = [44, 55, 66]
const [first, second] = array;//const [r, g, b] = [red, green, blue]
console.log(first);//44
console.log(second);//55

const color = ['red', 'green', 'blue']
const [r, , b] = color; //", ," is skipping 
console.log(r);//red
console.log(b);//blue

function tripleNumber(a, b) {
    return [a*3, b*3]
}
const [f, s] = tripleNumber(4, 5)
console.log(f, s);//12 15

let num1 = 1;
let num2 = 2;
[num2, num1] = [num1, num2]//swap
console.log(num2);//1
console.log(num1);//2
