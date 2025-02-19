const multiply = x => x*x;
console.log(multiply(3));

const add = (x,y=2) => x+y;
console.log(add(4));

const arrowFun = (ifOneParamBracketIsNotNeeded) => ifOneParamBracketIsNotNeeded.thisIsAge;//This arrow function gets the age of any person
const samplePerson = {
    myName: 'Tom',
    thisIsAge : 18
}
const getTheAge = arrowFun(samplePerson);

console.log(getTheAge);
//...............implicit return
const arrowFun1 = withoutBracketParam => withoutBracketParam.thisIsAge;
const samplePerson1 = {
    myName: 'Harry',
    thisIsAge : 81
}
const samplePerson2 = {
    myName: 'Jack',
    thisIsAge : 881
}
const getTheAge1 = arrowFun1(samplePerson1);
const getTheAge2 = arrowFun1(samplePerson2);

console.log(getTheAge1);
console.log(getTheAge2);

const ageFinding = param1 => param1.age;
const person3 = {
    name: 'Umar',
    age: 30
}
const heresAge = ageFinding(person3);
console.log(heresAge);