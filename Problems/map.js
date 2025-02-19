const numbers = [3, 4, 8, 6];

const doubledNumbers = [];
for (const num of numbers) {
    const doubled = num*2;
    doubledNumbers.push(doubled);
}
console.log(doubledNumbers);

//shortcut
const doubledNum = numbers.map(n => n*2);//map loops an array, for every element puts in function & returns array
console.log(doubledNum);

const classMates = ['Max', 'John', 'Andrew', "Gabriel"];

const length = classMates.map(c => c.length);  console.log(length);
const fLetter = classMates.map(f => f[0]);     console.log(fLetter);