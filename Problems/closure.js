function makingClosure() {//outer function
    let count = 0;
    return function () {//inner function
        count++;//inner function can access outside of it's scope (this is called closure), just like here it can access var of the outer fun
        return count;        
    }
}

const counter1 = makingClosure();
const counter2 = makingClosure();
const counter3 = makingClosure();

for (let i = 0; i < 10; i++) {
    // const counter2 = makingClosure();// This does not work 
    console.log('This is counter  1', counter1());//Each copy of outer function each will create a separate instance
    console.log('This is counter  2', counter2());//counter2 doesn't know about counter1 or 2
    console.log('This is counter  3', counter3());
}