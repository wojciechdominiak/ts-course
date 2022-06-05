enum Family {
  JULIA,
  WOJTEK,
  ZULKA,
}


const person /* : {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  family: 
}  */ = {
  name: "Wojtek",
  age: 30,
  hobbies: ["Sport", "reading", "cycling"],
  role: [2, "admin"],
  family: Family.ZULKA,
};

person.role.push(3); //error#
console.log(person.role);

for (const key in person) {
  console.log(person[key]);
}
for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
}

let favouriteHobby: string[] = [];
favouriteHobby = ["eat", "sleep"];

for (const hobby of favouriteHobby) {
  console.log(hobby.toUpperCase());
}

console.log(person.family);
