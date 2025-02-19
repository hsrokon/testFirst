const object1 = {
    name: 'Black Cap',
    fabric: 'cotton',
    color: 'black',
    isUsed : true
}

const keys = Object.keys(object1);
console.log(keys);//[ 'name', 'fabric', 'isUsed' ]

const values = Object.values(object1)
console.log(values);//[ 'Black Cap', 'cotton', true ]

const entries = Object.entries(object1)
console.log(entries); //array of array or 2 dimensional array
//[ [ 'name', 'Black Cap' ], [ 'fabric', 'cotton' ], [ 'isUsed', true ] ]

// delete object1.isUsed; //one way of deleting
console.log(object1);

//deleting with destructuring
const {isUsed, ...restPartOfObject} = object1;//takes out isUsed and creates a complete new object
console.log(restPartOfObject);//{ name: 'Black Cap', fabric: 'cotton', color: 'black' }

//prevents any further modification
// Object.freeze(object1);
// delete object1.color;
// console.log(object1);

Object.seal(object1);//Allows to modify but no delete of add
delete object1.fabric;
object1.origin='Unknown'
object1.color='grey'
console.log(object1);