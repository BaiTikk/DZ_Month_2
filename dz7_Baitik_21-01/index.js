class Cars {
    static type = 'CARS'
    constructor(options) {
        this.model = options.model
        this.colors = options.colors
        this.wheels = options.wheels
    }
    start(){
        console.log('Машина заведена.'  )
    }
}
const cars = new Cars({
})
cars.start()
// console.log(cars)
////////////////////////////////////////////////// 1
class Subaru extends Cars {
    static  type = 'CARS'
    constructor(options) {
        super(options);
        this.volume = options.volume
    }
}
const car1 = new Subaru({
    model: 'forester',
    colors: 'green',
    wheels: 4,
    volume: '2.2',
})
console.log(car1)

////////////////////////////////////////////////// 2
class BMW extends Cars {
    static  type = 'CARS'
    constructor(options) {
        super(options);
        this.HP = options.HP
    }
}
const car2 = new BMW({
    model: 'X5',
    colors: 'blue',
    wheels: 4,
    HP: 700
})
console.log(car2)
///////////////////////////////////////////////// 3
class Mercedes extends Cars {
    static  type = 'CARS'
    constructor(options) {
        super(options);
        this.car_year = options.car_year
    }
}
const car3 = new Mercedes ({
    model: 'Benz',
    colors: 'black',
    wheels: 4,
    car_year: 2008
})
console.log(car3)