function aboutArguments(a, b, c) {// "(a, b, c)" these are called "Parameters"
    console.log(arguments);
    //[Arguments] { '0': 22, '1': 44, '2': 66, '3': 88, '4': 100 } //this is called Array like object

    const argValues = [...arguments];
    console.log(argValues);//[ 22, 44, 66, 88, 100 ]

    const sum = a+b+c;
    return sum;
}

const argVar =aboutArguments(22, 44, 66, 88, 100);// "(22, 44, 66, 88, 100)" these are called "Arguments"
console.log(argVar);//132
console.log(aboutArguments.length);//3 (".length" of a function tells how many parameters are there)