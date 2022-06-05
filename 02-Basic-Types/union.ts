type numstring = number | string;

enum Type {
  ASNUMBER,
  ASTEXT,
}

function add(
  input1: numstring,
  input2: number | string,
  resultConvertion: Type
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConvertion === Type.ASNUMBER
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
}

console.log(add(2, 5, Type.ASNUMBER));
console.log(add("2", "5", Type.ASNUMBER));
console.log(add("Wojtek", "Julia", Type.ASTEXT));
