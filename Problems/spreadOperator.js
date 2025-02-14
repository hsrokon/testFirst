//Keeps the initial value avoiding new assignments........
const firstReference = [35, 87, 45];
const secondReference = firstReference;
console.log(secondReference);

secondReference.push(90);
console.log(firstReference);//first one also changed
console.log(secondReference);

const thirdReference = [...firstReference];//spread operator
firstReference.push(89);
console.log('this is first', firstReference);
console.log('this is second', secondReference);
console.log('this is third', thirdReference);//Third operator has initial reference

//Numbers can be added on copied reference.........
const fourthReference = [...firstReference, 0.4];
console.log('this is first', firstReference);
console.log('this is second', secondReference);
console.log('this is third', thirdReference);
console.log('this is fourth', fourthReference);

//Helps to execute numbers only............
const numbers = [34, 43, 76];
// const maxNum = Math.max(numbers);// result NaN
const maxNum = Math.max(...numbers);
console.log(numbers);//This is an array
console.log(...numbers);//This is only numbers
console.log(maxNum);

//Also can be used to copy..................
const someNumbers = [3, 4, 5];
const allNumbers = [1, 2, ...someNumbers, 6, 7, 8, 9]
console.log(someNumbers);
console.log(allNumbers);//Some numbers are included to all numbers