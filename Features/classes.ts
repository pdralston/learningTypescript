class Vehicle_C {
    //fields
    
    //methods
    //shortcut def/impl of fields
    constructor(public color: string) {}

    drive(): void {
        console.log('chugga chugga');
    }

    honk(): void {
        console.log('beepbeep');
    }
}
class Car_C extends Vehicle_C {
    //argument passthrough
    constructor(public wheels: number, color: string) { super(color);}
    
    drive(): void {
        console.log('vrooooooom');
    }
}
const vehicle = new Vehicle_C("orange");
const car_o = new Car_C(4, "red");
vehicle.drive();
vehicle.honk();
vehicle.drive();

car_o.drive();
car_o.honk();
car_o.drive();
console.log(car_o.color);
// the usual access modifiers work how you think: public, protected, private

