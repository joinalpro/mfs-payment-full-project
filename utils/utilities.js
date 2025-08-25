// Creating function for input Value Number

function inputValueNumber(id) {
  const inputField = document.getElementById(id).value;
  const inputFieldNumber = parseFloat(inputField);
  return inputFieldNumber;
}

// get input value
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}
//  Creating function to get Inner text
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseFloat(elementValue);
  return elementValueNumber;
}

// creating function to set innertext
function setInnerText(value) {
  const availableBalance = document.getElementById("available-balance");
  availableBalance.innerText = value;
}

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
