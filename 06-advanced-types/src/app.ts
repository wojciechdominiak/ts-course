//Intersection Types

type Admin = {
  name: string;
  priveleges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Wojtek",
  priveleges: ["Common"],
  startDate: new Date(),
};

console.log(e1);

type Combinable = number | boolean;
type Numeric = number | string;

type Universal = Combinable & Numeric; //number

//Type guards typeof
//Overload
function add(n1: string, n2: string): string;
function add(n1: number, n2: number): number;
function add(n1: Numeric, n2: Numeric) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

const result = add(1, 5);

//in

function printEmployee(emp: ElevatedEmployee) {
  console.log("Name: " + emp.name);
  if ("priveleges" in emp) {
    console.log("Priveleges: " + emp.priveleges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

//instancof

class Car {
  drive() {
    console.log("Drive..");
  }
}

class Truck extends Car {
  loadCargo(amount: number) {
    console.log("Load cargo: " + amount);
  }
}

type Vehicle = Car | Truck;

const car = new Car();
const truck = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(3);
  }
}
useVehicle(truck);
useVehicle(car);

//Discriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 50 });

//type Casting

const input = document.getElementById("user-input")! as HTMLInputElement;

input.value = "Hi there!";

interface ErrorContainer {
  [props: string]: string;
}

//Index Properties
const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  name: "Not a valid name!",
};

//Optional chaining
const fetchedData = {
  name: "Wojtek",
  age: 30,
  job: {
    title: "Designer",
    sallary: 40000,
  },
};

console.log(fetchedData?.job?.title);

//Nulish Coalescing

const userInput = "";
const storedData = userInput ?? "DEFAULT";

console.log(storedData);
