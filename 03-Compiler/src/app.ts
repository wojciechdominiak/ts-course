console.log("Elo hej");

const button = document.querySelector("button")!;

function clickHandler (message:string) {
    console.log(message);
}
if (button) {
  button.addEventListener("click", clickHandler.bind(button, "welcome"));
}
