
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

function checkName(name){
    if (typeof name !== "string") {
        return 'Invalid Name'
    }
    let lastLetter =name[name.length-1].toLowerCase();

    const goodLetters =['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        
    let var1 = goodLetters.includes(lastLetter)

       /* if (var1) {
            return "good name"
        } else {
            return "bad name"
        }
        */
        const goodName = var1 ? "Good name" : "Bad name";
        return goodName
}

console.log (checkName('hhuh'))
console.log (checkName('AFEE'))
console.log (checkName('Jhankar'))
console.log (checkName(199))
console.log (checkName(["Rashed"]))