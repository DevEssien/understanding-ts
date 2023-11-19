"use strict";
class Department {
    static createEmployee(name) {
        return { name };
    }
    constructor(id, n) {
        this.employees = [];
        this.id = id;
        this.name = n;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log("employee length ", this.employees.length);
        console.log(this.employees);
    }
}
Department.ficalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins = []) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("This is the department of ", this.name, this.id);
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
            throw new Error("please pass in a valid value");
        this.addReport(value);
    }
    constructor(id, reports = []) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        console.log("This is the department of ", this.name);
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
const itDep = new ITDepartment('diteot');
itDep.describe();
//# sourceMappingURL=app.js.map