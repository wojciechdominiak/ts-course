const userName = "Max";
let age = 30;

/* userName = "wojtek"; */
age = 29;
var result;

const add = (a: number, b: number = 4) => {
  return a + b;
};
console.log(add(3));

const button = document.querySelector("button")!;

button.addEventListener("click", (event) => {
  console.log(event);
});

const hobbies = ["sports", "cooking"];
const activeHobbies = ["hiking", ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  firstName: "wojtek",
  agee: 30,
};
const person2 = { ...person };

console.log(person2.firstName);

const addd = (...args: number[]) => {
  return args.reduce((curRes, curVal) => {
    return curRes + curVal;
  }, 0);
};
const added = addd(5, 10, 20, 23, 12);
console.log(added);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, hobbies);

const {firstName, agee} = person;
