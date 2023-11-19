abstract class Department {
  static ficalYear = 2020;

  protected readonly id: string;
  name: string;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name };
  }

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
    // console.log(Department.ficalYear)
  }

  abstract describe(this: Department): void;

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
  describe(this: ITDepartment) {
    console.log("This is the department of ", this.name, this.id);
  }
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("please pass in a valid value");
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[] = []) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) return AccountingDepartment.instance;
    this.instance = new AccountingDepartment('63dt2et3q53sg-gd', []);
    return this.instance;
  }

  describe(this: AccountingDepartment) {
    console.log("This is the department of ", this.name);
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

const accounting = AccountingDepartment.getInstance();
