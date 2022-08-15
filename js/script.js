import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notNumber, calculateIMC } from "./utils.js";

const form = document.querySelector('form');
const inputWeight = form.querySelector('#weight');
const inputHeight = form.querySelector('#height');


inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrheightIsNotANumber = notNumber(weight) || notNumber(height);
  clear();

  if(weightOrheightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateIMC(weight, height); 
  displayResultMessage(result);

};

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message;
  Modal.open();
}

function clear() {
  inputWeight.value = "";
  inputHeight.value = "";
}


