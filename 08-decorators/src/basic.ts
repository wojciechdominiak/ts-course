//A first class decorator - just function applying to class
//Decorator runs when JS finds your class definition
/* function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
    console.log("Creating person...");
  }
}
 */

//Decorator Factories - we can configure decorators e.g. add customizable string
function Logger(logString: string) {
  console.log("LOGGER-FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
//First withtemplate run
//Firt faktory is logger otherwise
@Logger("LOGGING - PERSON")
@WithTemplate("<h1>Hello World</h1> <h2></h2>", "app")
class Person {
  name = "Wojtek";
  constructor() {
    console.log("Creating person...");
  }
}

//More useful decorator
function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE-FACTORY");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    //RETURN VALUE decorator added to class
    //Replace old constructor in class with new with new feature - render a template
    //Render execute when we create instance of class
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId)! as HTMLDivElement;
        hookEl.innerHTML = template;
        hookEl.querySelector("h2")!.textContent = this.name;
      }
    };
  };
}

const person = new Person();

//Diving into property decorator
//Not decorator factory, but decorator function
//Execution on class definition

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Price");
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

//Accesor and parametrs decorations - all execute when we define class

//Accesor decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("ACCESOR-DECORATOR");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

//Method decorator
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("METHOD-DECORATOR");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

//Parameter decorator
function Log4(target: any, name: string, position: number) {
  console.log("PARAMETER-DECORATOR");
  console.log(target);
  console.log(name);
  console.log(position);
}

//Autobind decorator
function Autobind(_2: any, _: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", printer.showMessage); //printer.showMessage.bind(p); <- build decorator for this
