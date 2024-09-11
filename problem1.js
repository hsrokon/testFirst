

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