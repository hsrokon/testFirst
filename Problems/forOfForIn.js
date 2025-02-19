const numbersS = [2, 4, 6, 8];
for (const num of numbersS){
    console.log(num);
}

const righteous = 'Haji Muhsin';
for ( const char of righteous) {
    console.log(char);
}

const object1 = {
    name : 'Muhsin',
    age: 55,
    birth: 'Unknown'
}
//'for of' in arrays and strings but in objects 'for in'
for (const ke3y in object1) {
    const value = object1[ke3y] 
    console.log(ke3y, value);
}

const objectArray = Object.keys(object1);
for (const keys of objectArray) {
    console.log(keys);   
}