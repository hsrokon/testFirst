const num = 99;
const numStr = num+'';//shortcut string conversion
console.log(numStr);//99 <- not a number

const strNum = "900";
const num2 = +strNum;//shortcut conversion "900" to number 900
console.log(num2);//900

const num3 = 3;
function true1() {
    //return 'is true'; 
    //if you just return something without assigning return into a variable you'll not see the output since there is no place to show output. that's why we're logging.
    console.log('is true');
}
function false1() {
    // return 'not true';
    console.log('not true');
}
// const check = num3 ? true1() : false1();
num3 ? true1() : false1();//shortcut //is true
// console.log(check);

const num4 = true;
num4 && true1();//more shortcut //is true

//toggle
let isActive = true;
isActive = !isActive
console.log(isActive);//false