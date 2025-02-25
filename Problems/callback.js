function management(manageThis, money) {
    manageThis(money)//sending a function as parameter and when it'll be called inside that's callback
}

function realState(money) {
    console.log('real state investment', money);
}

function stock(money) {
    console.log('stock investment', money);
}

function sponsorship(money) {
    console.log('sponsorship investment', money);
}

management(realState, 200000)//real state investment 200000
management(stock, 130000)//stock investment 130000
management(sponsorship, 80000)//sponsorship investment 80000