"use strict";
const e1 = {
    name: "Max",
    priviledges: ["create-server"],
    startDate: new Date(),
};
const sum = (a, b) => {
    if (typeof a === "string" || typeof b === "string")
        return a.toString() + b.toString();
    return a + b;
};
const printEmployeeInfo = (employee) => {
    console.log(employee.name);
    if ("priviledges" in employee)
        console.log("priviledges ", employee.priviledges);
    if ("startDate" in employee)
        console.log("start date ", employee.startDate);
};
class Car {
    constructor() {
        this.name = "car";
    }
    drive() {
        console.log("driving  ", this.name);
    }
}
class Truck {
    constructor() {
        this.name = "truck";
    }
    drive() {
        console.log("driving ", this.name);
    }
    loadCargo() {
        console.log("loading cargo onboard");
    }
}
const useVehicle = (vehicle) => {
    vehicle.drive();
    if ('loadCargo' in vehicle)
        vehicle.loadCargo();
};
useVehicle(new Car());
const moveAnimal = (animal) => {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('moving at speed: ', speed);
};
moveAnimal({ type: 'horse', runningSpeed: 4503 });
//# sourceMappingURL=typeguard.js.map