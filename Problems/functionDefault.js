function normal(nor1, nor2) {
    const sum = nor1 + nor2;
    console.log(nor1, nor2, sum);//11 23 34
}

// normal();
// normal(11);
normal(11, 23);

function setDefaultParamVal(nor1, nor2=0) {
    const sum = nor1 + nor2;
    console.log(nor1, nor2, sum);
}

setDefaultParamVal(88);//88 0 88
setDefaultParamVal(88, 77);//88 77 165

function setDefaultBoolean(nor1, nor2=true) {
    const sum = nor1 + nor2;
    console.log(nor1, nor2, sum);
}
//true =1, false = 0
setDefaultBoolean(88);//88 true 89

function defaultString(first, last='halbhalb') {
    const full = first + ' ' + last
    console.log(first, last, full);
}
defaultString('blahblah');//blahblah halbhalb blahblah halbhalb

function defaulArray(first = []) {

}

function defaulObject(first = {}) {

}

function defaulBoolean(first = true) {

}