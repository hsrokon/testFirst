
// problem1
/*
function calculateMoney(ticketSale) {
    if (ticketSale<0) {
        return 'Invalid Number'
    }
    const ticketPrice = 120;
    let everydaySale = ticketPrice * ticketSale;
    
    let everydayCost = everydaySale -(500 + (8*50));
    return everydayCost;
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log(calculateMoney(3)); 
*/



// problem2
/*
function checkName(name){
    if (typeof name !== "string") {
        return 'Invalid Name'
    }
    let lastLetter =name[name.length-1].toLowerCase();

    const goodLetters =['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        
    let var1 = goodLetters.includes(lastLetter)

    //     if (var1) {
    //         return "good name"
    //     } else {
    //         return "bad name"
    //     }
    
        const goodName = var1 ? "Good name" : "Bad name";
        return goodName
}

console.log (checkName('hhuh'))
console.log (checkName('AFEE'))
console.log (checkName('Jhankar'))
console.log (checkName(199))
console.log (checkName(["Rashed"]))*/

//problem3
function deleteInvalids(array){
    if (!Array.isArray(array)) {
        return "invalid array"
    }

    let numberArray =[];

    for (const element of array) {
       if (typeof element ==='number' && !isNaN(element)) {
        numberArray.push(element)
        }
    }
    
    return numberArray
}

console.log(deleteInvalids([1,2,-3]))
console.log(deleteInvalids( {num:[1,2,3]}))
console.log(deleteInvalids([1,null,undefined,18,-19,NaN,"12",[1,2],{ob:"lala"}]))



//chatGPT
function deleteInvalids(array) {
    // Check if the input is an array
    if (!Array.isArray(array)) {
        return "Invalid Array"; // Return error message if not an array
    }
    
    // Filter the array to keep only valid numbers
    const validNumbers = array.filter(item => typeof item === 'number' && !isNaN(item));

    return validNumbers;
}

// Test cases
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); // [1, 18, -19]
console.log(deleteInvalids(["1", {num: 2}, NaN])); // []
console.log(deleteInvalids([1, 2, -3])); // [1, 2, -3]
console.log(deleteInvalids({num: [1, 2, 3]})); // "Invalid Array"
