const userName = "Max";
let age = 30;

/* userName = "wojtek"; */
age = 29;
var result;

const add = (n1: number, n2: number = 1) => {
  return n1 + n2;
};

console.log(add(2));

const button = document.querySelector("button")! as HTMLButtonElement;

button.addEventListener("click", (event) => {
  console.log(event);
});

const hobbies = ["cooking", "runing"];
const activities = ["reading"];

activities.push(...hobbies);

console.log(activities);

const person = {
  name: "Wojciech",
  age: 30,
};

const copyOfPerson = { ...person };

console.log(copyOfPerson);

const add2 = (...nums: number[]) => {
  return nums.reduce((curRes, curVal) => {
    return curRes + curVal;
  }, 0);
};

console.log(add2(5,3,4,3,2,1));