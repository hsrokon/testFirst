// Function declaration is hoisted. This function can be called before it's defined.
defaultHoisted(); // Works fine because it's hoisted

// Example with function expression inside const - not hoisted
// Uncommenting the line below will throw an error because `notHoisted` is in the TDZ (Temporal Dead Zone).
// notHoisted(1); // Error - Cannot access 'notHoisted' before initialization

// Function declarations are hoisted to the top of their scope
function defaultHoisted() {
    console.log('This function is hoisted');
}

// Function expression inside `const` is NOT hoisted
// This means the function can only be used after the line where it's initialized.
const notHoisted = function (a) {
    console.log('not hoisted by default', a);
};

// The following line works because `notHoisted` is defined before being called
console.log(notHoisted(1)); // Output: 'not hoisted by default 1'

// Variable declaration with `var` is hoisted, but only the declaration is hoisted, not the initialization.
console.log(varHoisted); // undefined (hoisted but uninitialized)
var varHoisted = 'This is a var variable';

// Variable declared with `let` is hoisted but cannot be accessed before initialization.
// Uncommenting the line below will throw an error because `letHoisted` is in the TDZ.
// console.log(letHoisted); // Error - Cannot access 'letHoisted' before initialization
let letHoisted = 'This is a let variable';

// Variable declared with `const` is also hoisted but cannot be accessed before initialization.
// Uncommenting the line below will throw an error because `constHoisted` is in the TDZ.
// console.log(constHoisted); // Error - Cannot access 'constHoisted' before initialization
const constHoisted = 'This is a const variable';
