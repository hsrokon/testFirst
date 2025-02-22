//Keeps the initial value avoiding new assignments........
const firstReference = [35, 87, 45];
const secondReference = firstReference;
console.log(secondReference);//[ 35, 87, 45 ]

secondReference.push(90);
console.log(firstReference);//first one also changed/[ 35, 87, 45, 90 ]
console.log(secondReference);//[ 35, 87, 45, 90 ]

const thirdReference = [...firstReference];//spread operator
firstReference.push(89);
console.log('this is first', firstReference);//[ 35, 87, 45, 90, 89 ]//Non-primitive if not reassigned but changed partially since they indicate the same reference if one changes it's value thus others also change
console.log('this is second', secondReference);//[ 35, 87, 45, 90, 89 ]
console.log('this is third', thirdReference);//[ 35, 87, 45, 90 ]
//Third operator has initial reference

//Numbers can be added on copied reference.........
const fourthReference = [...firstReference, 0.4];
console.log('this is first', firstReference);
console.log('this is second', secondReference);
console.log('this is third', thirdReference);
console.log('this is fourth', fourthReference);//[ 35, 87, 45, 90, 89, 0.4 ]

//Helps to execute numbers only............
const numbers = [34, 43, 76];
// const maxNum = Math.max(numbers);// result NaN
const maxNum = Math.max(...numbers);
console.log(numbers);//This is an array//[ 34, 43, 76 ]
console.log(...numbers);//This is only numbers//34 43 76
console.log(maxNum);//76

//Also can be used to copy..................
const someNumbers = [3, 4, 5];
const allNumbers = [1, 2, ...someNumbers, 6, 7, 8, 9]
console.log(someNumbers);
console.log(allNumbers);//Some numbers are included to all numbers//[1, 2, 3, 4, 5, 6, 7, 8, 9]