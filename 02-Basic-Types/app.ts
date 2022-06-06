let userInput: unknown;

userInput = 5;
userInput = "Wojtek";

let userName: string;

if (typeof userInput === "string") {
  userName = userInput;
}

function genereateError(message: string, code: number) {
  throw message + code;
}

genereateError("Sth went wrong!", 599);
