interface Named {
  readonly name?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number = 30;

  constructor(name?: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + this.name);
    } else {
      console.log(phrase);
    }
  }
}

const user1 = new Person();

user1.greet("Hello ");

//interface Function Type

/* type AddFn = (n1: number, n2: number) => number; */
interface AddFn {
  (n1: number, n2: number): number;
}

const add: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(3, 5));
