const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const button = document.querySelector(".btn");
const body = document.querySelector("body");
const equil = (input1, input2) => input1.value === input2.value;
let passwordsEquil = document.querySelector("#passwordsEquil");
let passwordLowerCase = document.querySelector("#passwordLowerCase");
let passwordUpperCase = document.querySelector("#passwordUpperCase");
let passwordNumber = document.querySelector("#passwordNumber");
let passwordLength = document.querySelector("#passwordLength");

button.addEventListener("click", () => {
  if (input1.type === "password" && input2.type === "password") {
    input1.type = "text";
    input2.type = "text";
    button.innerText = "Hide Password";
  } else {
    input1.type = "password";
    input2.type = "password";
    button.innerText = "Show Password";
  }
});

body.addEventListener("input", () => {
  if (equil(input1, input2)) {
    passwordsEquil.innerText = "Passwords are equil" + " ✅";
    checkLowerCase(input1);
    checkUpperCase(input1);
    checkNumber(input1);
    checkLength(input1);
  } else {
    passwordsEquil.innerText = "Passwords are equil" + " ❌";
    passwordLowerCase.innerText = "Lower case letters" + " ❌";
    passwordUpperCase.innerText = "Upper case letters" + " ❌";
    passwordNumber.innerText = "Contains numbers" + " ❌";
    passwordLength.innerText = "At least 10 characters long" + " ❌";
  }
});

function checkLowerCase(input1) {
  if (input1.value.toUpperCase() !== input1.value) {
    passwordLowerCase.innerText = "Lower case letters" + " ✅";
  }
}

function checkUpperCase(input1) {
  if (input1.value.toLowerCase() !== input1.value) {
    passwordUpperCase.innerText = "Upper case letters" + " ✅";
  }
}

function checkNumber(input1) {
  if ((input1) => /\d/ === true) {
    passwordNumber.innerText = "Contains numbers" + " ✅";
  }
}

function checkLength(input1) {
  if (input1.value.length >= 9) {
    passwordLength.innerText = "At least 10 characters long" + " ✅";
  }
}
