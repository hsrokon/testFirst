const arrowFun = (ifOneParamBracketIsNotNeeded) => ifOneParamBracketIsNotNeeded.thisIsAge;//This arrow function gets the age of any person
const samplePerson = {'my name': 'Tom',
    'thisIsAge' : 18
}
const getTheAge = arrowFun(samplePerson);

console.log(getTheAge);
//...............implicit return
const arrowFun1 = withoutBracketParam => withoutBracketParam.thisIsAge;
const samplePerson1 = {'my name': 'Harry',
    'thisIsAge' : 81
}
const samplePerson2 = {'my name': 'Jack',
    'thisIsAge' : 881
}
const getTheAge1 = arrowFun1(samplePerson1);
const getTheAge2 = arrowFun1(samplePerson2);

console.log(getTheAge1);
console.log(getTheAge2);