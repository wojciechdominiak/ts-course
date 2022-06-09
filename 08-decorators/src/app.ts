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
  name: string;
  constructor(name: string) {
    this.name = name;
    console.log("Creating person...");
  }
}

//More useful decorator
function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE-FACTORY");
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId)! as HTMLDivElement;
    hookEl.innerHTML = template;
    const newPerson = new constructor("Wojtek");
    hookEl.querySelector("h2")!.textContent = newPerson.name;
  };
}

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

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
