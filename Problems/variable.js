const willNotChange = 87;
// willNotChange=98;
const willNotChangeUpdated = willNotChange + 100;
console.log(willNotChangeUpdated);

const unchangableArray = [33, 44, 55, 66, 77];
// unchangableArray = [44, 55]
unchangableArray[1] = 11; //unchangableArrayUpdated
unchangableArray.push(88, 99);
console.log(unchangableArray);

const unchangeAbleObject = {
    'myName' : 'Gtr flame',
    'myAge' : 35
}

// unchangeAbleObject = {
//     'myOrigin' : 'nippon',
//     'myPower' : 1000
// }

unchangeAbleObject.myAge=1000;
console.log(unchangeAbleObject);
