"use strict";
class Department {
    constructor(id, n) {
        this.employees = [];
        this.id = id;
        this.name = n;
    }
    describe() {
        console.log("This is the department of ", this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log("employee length ", this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins = []) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error('please pass in a valid value');
        this.addReport(value);
    }
    constructor(id, reports = []) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(name) {
        if (name.toLowerCase() === "max")
            return;
        else
            this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment("63ah4nbc93d3rm");
accounting.mostRecentReport = 'we are still working on the end of years report from the department of accounting';
accounting.addReport("this is another report from the bad man pablo gang");
console.log(accounting.mostRecentReport);
console.log("accounting ", accounting);
accounting.printReport();
//# sourceMappingURL=app.js.map