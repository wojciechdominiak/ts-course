function add(n1: number, n2: number, printResult: boolean, phrase: string) /* {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("sth went wrong!");
  } else  */ {
  const result = n1 + n2;
  if (printResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 2.8;
const number2 = 4.8;
const printResult = true;
const phrase = "Result is: ";

add(number1, number2, printResult, phrase);
