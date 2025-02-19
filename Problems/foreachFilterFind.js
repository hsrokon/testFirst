const numbers = [34, 65, 97, 23, 89];
//forEach loops each does not return unless given command unlike map
const doubledNumbers = []
const usingForEach = numbers.forEach(num => {
    const doubled =num*2
    doubledNumbers.push(doubled)
})
console.log(doubledNumbers);//[ 68, 130, 194, 46, 178 ]
console.log(usingForEach);//undefined

//filter - selects & gives an array according to the set condition
const usingFilter = numbers.filter(num => num>=50)
console.log(numbers);//[ 34, 65, 97, 23, 89 ]
console.log(usingFilter);//[ 65, 97, 89 ]
const usingFilterEven = numbers.filter(num => num%2===0)
console.log(usingFilterEven);//[ 34 ]
const usingFilterOdd = numbers.filter(num => num%2===1)
console.log(usingFilterOdd);//[ 65, 97, 23, 89 ]

const classMates = ['Max', 'John', 'Andrew', "Gabriel"];
const oddCharNameOut = classMates.filter(cMates => cMates.length%2 ===1)
console.log(oddCharNameOut);//[ 'Max', 'Gabriel' ]

//Find
const prices =[300, 700, 564, 888, 456, 987];
const findResult = prices.find(price => price>= 500);
console.log(findResult);//700 -- only gives the firstOne value(not in array format) that matches the condition


//Reduce 
const array1 = [5, 7, 8, 5, 8];
const usingReduce = array1.reduce( (previous, current) => previous+ current, 0)
console.log(usingReduce);


//All use in one case example
const arrayOfObjects = [
    {id: 1, name: 'Google Pixel', price: 45000},
    {id: 2, name: 'Iphone', price: 155000},
    {id: 3, name: 'Samsung', price: 75000},
    {id: 4, name: 'Huawei', price: 40000},
]

const productsName = arrayOfObjects.map(product => product.name);
console.log(productsName);//[ 'Google Pixel', 'Iphone', 'Samsung', 'Huawei' ]

const forEachArray = [];
            arrayOfObjects.forEach(product => {
                forEachArray.push(product.name)
            })
console.log(forEachArray);//[ 'Google Pixel', 'Iphone', 'Samsung', 'Huawei' ]

const productsName2 = arrayOfObjects.filter(product => product.price>50000)
console.log(productsName2);//[
    // { id: 2, name: 'Iphone', price: 155000 },
    // { id: 3, name: 'Samsung', price: 75000 }
    //]

const productsName3 = arrayOfObjects.find(product => product.price<50000)
console.log(productsName3);//{ id: 1, name: 'Google Pixel', price: 45000 } //returns only the first one that matches condition 

const productsName4 = arrayOfObjects.reduce((p, c) => p + c.price, 0)
console.log(productsName4);
