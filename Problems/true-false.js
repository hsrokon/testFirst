/*
Any number is truthy except 0
Any string is truthy except '' or empty string. Even a space ' ' is true
-null and undefined is falsy
Empty object and array is always truthy
*/

// let x=0; //false
// let x='false'; //true
// let x= undefined; //false
// let x= null; //false
let x= []; //false
if (x) {
    console.log('true');
} else {
    console.log('false');
}

let d = false;
console.log(!d);//true
console.log(!!d);//false

let e = true;
console.log(!e);//false
console.log(!!e);//true