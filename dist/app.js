"use strict";
class Department {
    constructor(id, n) {
        this.employees = [];
        this.id = id;
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
class ITDepartment extends Department {
    constructor(id, admins = []) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports = []) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addEmployee(name) {
        if (name.toLowerCase() === 'max')
            return;
        else
            this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReport() {
        console.log(this.reports);
    }
}
const Accounting = new AccountingDepartment('63ah4nbc93d3rm');
Accounting.addEmployee('Max');
Accounting.addEmployee('Jeff Cant');
Accounting.addReport('this is another report from the bad man pablo gang');
console.log('Accounting ', Accounting);
Accounting.printReport();
//# sourceMappingURL=app.js.map