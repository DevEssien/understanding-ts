"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('This is the department of ', this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log('employee length ', this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('accounting');
accounting.addEmployee('tony stark');
accounting.addEmployee('Jeff Cant');
accounting.printEmployeeInfo();
//# sourceMappingURL=app.js.map