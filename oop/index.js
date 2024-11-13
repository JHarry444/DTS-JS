class Vehicle {

    constructor(wheels, colour) {
        this._wheels = wheels;
        this._colour = colour;
    }

    horn() {
        console.log("HONK HONK");
        
    }

}

class Car extends Vehicle {

    constructor(colour, fourWheelDrive) {
        super(4, colour);
        this._fourWheelDrive = fourWheelDrive;
    }

    horn() {
        console.log("BEEP BEEP");
        
    }
}