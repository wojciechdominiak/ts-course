//type AddFn = (a:number, b:number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1, n2) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const user1 = new Person();

user1.greet("Hello");
