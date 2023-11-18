class Department {
    name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }
    describe(this: Department) {
        console.log('This is the department of ', this.name)
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInfo(this: Department) {
        console.log('employee length ', this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('accounting');
accounting.addEmployee('tony stark');
accounting.addEmployee('Jeff Cant')
accounting.printEmployeeInfo();
