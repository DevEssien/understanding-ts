class Department {
  private readonly id: string;
  name: string;
  protected employees: string[] = [];

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
  }
  describe(this: Department) {
    console.log("This is the department of ", this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo(this: Department) {
    console.log("employee length ", this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[] = []) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('please pass in a valid value');
    this.addReport(value);
  }

  constructor(id: string, private reports: string[] = []) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name.toLowerCase() === "max") return;
    else this.employees.push(name);
  }
  addReport(this: AccountingDepartment, text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReport(this: AccountingDepartment) {
    console.log(this.reports);
  }
}

// Accounting.addEmployee('Max');
// Accounting.addEmployee('Jeff Cant')
// Accounting.printEmployeeInfo();

const accounting = new AccountingDepartment("63ah4nbc93d3rm");
accounting.mostRecentReport = 'we are still working on the end of years report from the department of accounting';  //we execute the set method as a property and not as a method
accounting.addReport("this is another report from the bad man pablo gang");
console.log(accounting.mostRecentReport);
console.log("accounting ", accounting);
accounting.printReport();
