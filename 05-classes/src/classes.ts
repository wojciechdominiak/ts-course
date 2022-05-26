abstract class Department {
  static fiscalYear = 2022;
  protected employees: string[] = [];

  constructor(protected readonly id: string, protected name: string) {
    this.id = id;
    this.name = name;
  }

  abstract describe(this: Department): void;

  addEmployee(eployee: string) {
    this.employees.push(eployee);
  }

  printEmployee() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

class ITDepartment extends Department {
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, "IT");
    this.lastReport = reports[0];
  }

  get getLastReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No report found.");
    }
  }

  set setLastReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    } else {
      this.addReport(value);
    }
  }

  describe() {
    console.log("IT id: " + this.id + this.name);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

class Accounting extends Department {
  private static instance: Accounting;
  private constructor(id: string) {
    super(id, "acc");
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Accounting("d2");
    return this.instance;
  }
  addEmployee(name: string) {
    if (name === "Wojtek") {
      return;
    }
    this.employees.push(name);
  }

  describe() {
    console.log("Acc Department: ID:" + this.id);
  }
}

//static
const employe1 = Department.createEmployee("Wojtek2");
console.log(employe1, Department.fiscalYear);

const IT = new ITDepartment("d1", []);
IT.setLastReport = "Error";

console.log(IT.getLastReport);

IT.addReport("somethingwentwrong");

IT.describe();
console.log(IT);

IT.addEmployee("Max");
IT.addEmployee("Wojtek");

IT.printEmployee();

//const acc = new Accounting("d2");
const acc = Accounting.getInstance();

acc.addEmployee("Max");
acc.addEmployee("Wojtek");

acc.printEmployee();
acc.describe();
