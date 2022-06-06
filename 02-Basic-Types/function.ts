const add = (n1: number, n2: number) => {
  return n1 + n2;
};

function printResult(res) {
  console.log("Result is: " + res);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(5, 5));

function addAndHandle(n1: number, n2: number, cb: (result: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(5, 6, (result) => {
  console.log(result);
});
