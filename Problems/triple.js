//=== checks type and value -Recommended & always should be used
//== checks value only & if needed will convert in multiple stages

const two = 2;
const dui = '2';
// == says they are equal
//=== says they are not equal
if (two===dui) {
    console.log('they are equal');
} else {
    console.log('they are not equal');
}

const two1 = true;
const dui1 = 1;
// == says they are equal, here it converted 1 to true of 0,1 binary as 0=false, 1=true
//=== says they are not equal
if (two1==dui1) {
    console.log('they are equal');
} else {
    console.log('they are not equal');
}

const two2 = [];
const dui2 = [];
// == says they are not equal - since their reference is different
//=== says they are not equal - since their reference is different
if (two2==dui2) {
    console.log('they are equal');
} else {
    console.log('they are not equal');
}

const two3 = [];
const dui3 = two3;
// == says they are equal - since their reference is same
//=== says they are equal - since their reference is same
if (two3===dui3) {
    console.log('they are equal');
} else {
    console.log('they are not equal');
}