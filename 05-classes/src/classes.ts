abstract class Department {
  private employees: string[] = [];

  static fiscalYear = 2002;

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(): void;

  addEmployee(employe: string) {
    this.employees.push(employe);
  }

  infoEmployee() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

enum Family {
  Zulka,
  Wojtek,
  Julka,
}

let tuple: [string, string, string];
tuple = ["Wojtek", "Zulka", "Julka"];

console.log(Department.fiscalYear);
console.log(Department.createEmployee("Wojtek"));

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe() {
    console.log(`IT department (${this.id}): ${this.name}`);
  }

  addAdmin(admin: string) {
    this.admins.push(admin);
  }

  infoAdmin() {
    console.log(this.admins.length);
    console.log(this.admins);
  }
}

const it = new ITDepartment("d2", ["Wojtek", "Julia"]);
it.describe();

it.addAdmin("Zulka");
it.infoAdmin();

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;
  private lastRaport: string;
  public raports: string[] = [];
  private constructor(id: string, public admins: string[]) {
    super(id, "Accouting");
    this.lastRaport = this.raports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d1", ["Wojtek", "Julia"]);
    return this.instance;
  }

  describe() {
    console.log(`Accounting department (${this.id}): ${this.name}`);
  }

  get latestRaport() {
    if (this.lastRaport) {
      return this.lastRaport;
    } else {
      throw Error("0 raports");
    }
  }

  addRaport(raport: string) {
    this.raports.push(raport);
    this.lastRaport = raport;
  }
}

const accounting = AccountingDepartment.getInstance();

accounting.describe();

accounting.addEmployee("Wojtek");
accounting.addEmployee("Julia");

accounting.infoEmployee();

accounting.addRaport("Sth went wrong -500m");

console.log(accounting.latestRaport);
