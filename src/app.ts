type Admin = {
    name: string;
    priviledges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    priviledges: ['create-server'],
    startDate: new Date()
}

console.log(e1)