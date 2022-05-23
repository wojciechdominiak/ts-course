function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(`Result: ${num}`);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let comibnedValues: (a: number, b: number) => number;

comibnedValues = add;
/* comibnedValues = printResult; */
/* comibnedValues = 5; */

console.log(comibnedValues(9, 9));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
