class Vehicle {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    //Method
    move () {
        console.log('This is GTR');
    }
}

//inherit
class Racing extends Vehicle {
        constructor(name, price, hp, wd){
            super(name, price)
            this.hp=hp;
            this.wd=wd;
        }
}

class SUV extends Vehicle {
    constructor(name, price, seat, tow){
        super(name, price);
        this.seat=seat;
        this.tow=tow;
    }
}

const car1 = new Racing('GTR','130k', 1000, '4wd');
console.log(car1);//Racing { name: 'GTR', price: '450k', hp: 1000, wd: '4wd' }

const car2 = new SUV('Range Rover', '110k', 350, '4wd');
console.log(car2);//SUV { name: 'Range Rover', price: '110k', seat: 350, tow: '4wd' }