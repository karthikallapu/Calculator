function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  let displayValue = document.getElementById("display").value;
  let result = eval(displayValue);
  document.getElementById("display").value = result;
}
