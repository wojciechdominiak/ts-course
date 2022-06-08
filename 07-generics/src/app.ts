//What are generics
const names: Array<string> = [];
names[0].split(" "); //we can use split method thans gengeric type

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hi there");
  }, 2000);
});

promise.then((data) => {
  console.log(data.split("")); //like upper
});

//Creating a generic types
function merge<T, U>(ObjA: T, ObjB: U) {
  return Object.assign(ObjA, ObjB);
}

const mergedObj = merge({ name: "Wojtek" }, { age: 30 });
const mergedObj2 = merge({ name: "Wojtek", hobbies: ["Sport"] }, { age: 30 });
console.log(mergedObj2.hobbies);
console.log(mergedObj.age);
// tell TS that T and U are different type of object not only object
