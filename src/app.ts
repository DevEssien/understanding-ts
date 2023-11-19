class Department {
    private readonly id: string;
    name: string;
    private employees: string[] = [];

    constructor(id: string,  n: string) {
        this.id = id;
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

class ITDepartment extends Department {
    constructor(id: string, public admins: string[] = []) {
        super(id, 'IT');
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[] = []) {
        super(id, 'Accounting');
    }
    addReport(this: AccountingDepartment, text: string) {
        this.reports.push(text);
    }
    printReport(this: AccountingDepartment) {
        console.log(this.reports);
    }
}

const Accounting = new AccountingDepartment('63ah4nbc93d3rm');
Accounting.addEmployee('tony stark');
Accounting.addEmployee('Jeff Cant')
Accounting.printEmployeeInfo();
Accounting.addReport('this is another report from the bad man pablo gang');
console.log('Accounting ', Accounting);
Accounting.printReport()
