function normal(nor1, nor2) {
    const sum = nor1 + nor2;
    console.log(nor1, nor2, sum);
}

// normal();
// normal(11);
normal(11, 23);

function setDefaultParamVal(nor1, nor2=0) {
    const sum = nor1 + nor2;
    console.log(nor1, nor2, sum);
}

setDefaultParamVal(88);
setDefaultParamVal(88, 77);

function setDefaultBoolean(nor1, nor2=true) {
    const sum = nor1 + nor2;
    console.log(nor1, nor2, sum);
}
//true =1, false = 0
setDefaultBoolean(88);

function defaultString(first, last='') {
    const full = first + ' ' + last
    console.log(first, last, full);
}
defaultString('blahblah');

function defaulArray(first = []) {

}

function defaulObject(first = {}) {

}

function defaulBoolean(first = true) {

}