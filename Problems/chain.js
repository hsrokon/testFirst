const products = [{
    id:5000,
    details: {
        type: 'Laptop',
        price: 70000,
        features:[{
            ram: '16gb',
            processor:'intel 12000k'
        },
        {
            origin: 'SK',
            sold: '16k'
        }]
    }
}]

console.log(products[0].details.features[1].sold);//16k

const user = {
    id: 5001,
    address: {
        city:'Dhaka',
        country : 'Bangladesh',
        street:{
            first: 'Indira Road'
        }
    }
}
const user1 = {
    id: 5003,
    address: {
        city:'Dhaka',
        country : 'Bangladesh',
    }
}

console.log(user.address.street.first);
console.log(user1.address.street?.first);//"?" optional chain if no value skips 