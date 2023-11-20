type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

type unknownEmployee = Admin | Employee;

type Combinable = number | string;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const e1: ElevatedEmployee = {
  name: "Max",
  priviledges: ["create-server"],
  startDate: new Date(),
};

const sum = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();
  return a + b;
};

const printEmployeeInfo = (employee: unknownEmployee) => {
  console.log(employee.name);
  if ("priviledges" in employee)
    console.log("priviledges ", employee.priviledges);
  if ("startDate" in employee) console.log("start date ", employee.startDate);
};
// printEmployeeInfo({
//   name: "jane",
//   startDate: new Date(),
//   priviledges: ["create-app"],
// });

class Car {
  name = "car";
  drive() {
    console.log("driving  ", this.name);
  }
}

class Truck {
  name = "truck";
  drive() {
    console.log("driving ", this.name);
  }
  loadCargo() {
    console.log("loading cargo onboard");
  }
}

type Vehicle = Car | Truck;

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if ('loadCargo' in vehicle) vehicle.loadCargo()
};
useVehicle(new Car())
