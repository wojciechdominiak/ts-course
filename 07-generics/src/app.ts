//generic function

/* const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then(data => {
    data.split(' ');
    console.log(data);
})
 */

/* async function getData(){
    const promise: Promise<string> = new Promise((resolve) => {
        setTimeout(() => {
          resolve("This is done!");
        }, 2000);
      });
      (document.getElementById("demo") as HTMLInputElement).value = await promise;
}

getData(); */

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj.name);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndPrint(["sport", "cookie"]));

function exractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value + ${obj[key]}`;
}

console.log(exractAndConvert({ name: "Wojtek" }, "name"));

//generic classes

class DataStorage<T extends string | number | boolean | bigint | symbol> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Wojtek");
textStorage.addItem("Max");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

/* const objStorage = new DataStorage<object>();
const maxObj = { name: "Max" };
objStorage.addItem({ name: "Wojtek" });
objStorage.addItem(maxObj);
objStorage.removeItem(maxObj);
console.log(objStorage.getItems()); */
