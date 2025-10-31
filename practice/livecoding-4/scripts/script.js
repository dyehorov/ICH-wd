const registerForm = document.querySelector("#registerForm");
const usernameInput = document.querySelector(".username");
const lastnameInput = document.querySelector(".lastname");
const usernameLabel = document.querySelector(".usernameLabel");
const lastnameLabel = document.querySelector(".lastnameLabel");
const loginInput = document.querySelector(".loginInput");
const loginLabel = document.querySelector(".loginLabel");
const passwordInput = document.querySelector(".passwordInput");
const passwordLabel = document.querySelector(".passwordLabel");

function renderStatusMessage(parent, data) {
  if (parent.lastElementChild.nodeName === "P") {
    parent.lastElementChild.remove();
  }
  const statusMessageElement = document.createElement("p");
  parent.appendChild(statusMessageElement);
  statusMessageElement.textContent = data.text;
  statusMessageElement.style.color = data.color;
}

function usernameValidation(value) {
  return value.length >= 2 && value.length <= 26
    ? {
        text: "valid data",
        color: "green",
        isValid: true,
      }
    : {
        text: "invalid data",
        color: "red",
        isValid: false,
      };
}

function lastnameValidation(value) {
  return value.length >= 2 && value.length <= 30
    ? {
        text: "Last name is correct",
        color: "green",
        isValid: true,
      }
    : {
        text: "Last name is incorrect",
        color: "red",
        isValid: false,
      };
}

function checkIfTheStringHasNumber(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] * 1 || string[i] == 0) {
      return false;
    }
  }
  return true;
}

function loginValidation(value) {
  return value.length >= 6 &&
    value.length <= 24 &&
    checkIfTheStringHasNumber(value)
    ? {
        text: "Login is correct",
        color: "green",
        isValid: true,
      }
    : {
        text: "Login is incorrect",
        color: "red",
        isValid: false,
      };
}

function checkIfTheStringHasSpecialCharacter(string) {
  const symbols = ["!", ".", "?"]; // массив мы не меняем, лучше выкинуть из функции
  for (let i = 0; i < string.length; i++) {
    // лучше for...of
    for (let k = 0; k < symbols.length; k++) {
      if (string[i] === symbols[k]) {
        return true;
      }
    }
  }
  return false;
}

function passwordValidation(value) {
  return value.length >= 8 && checkIfTheStringHasSpecialCharacter(value)
    ? { text: "Login is correct", color: "green", isValid: true }
    : { text: "Login is incorrect", color: "red", isValid: false };
}

usernameInput.addEventListener("input", (event) => {
  const statusData = usernameValidation(event.target.value);
  renderStatusMessage(usernameLabel, statusData);
});

lastnameInput.addEventListener("input", (event) => {
  const statusData = lastnameValidation(event.target.value);
  renderStatusMessage(lastnameLabel, statusData);
});

loginInput.addEventListener("input", (event) => {
  const statusData = loginValidation(event.target.value);
  renderStatusMessage(loginLabel, statusData);
});

passwordInput.addEventListener("input", (event) => {
  const statusData = passwordValidation(event.target.value);
  renderStatusMessage(passwordLabel, statusData);
});

function registerFormValidator(username, lastname, login, password) {
  return (
    usernameValidation(username).isValid &&
    lastnameValidation(lastname).isValid &&
    loginValidation(login).isValid &&
    passwordValidation(password).isValid
  );
}

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = event.target.elements["username"].value;
  const lastname = event.target.elements["lastname"].value;
  const login = event.target.elements["login"].value;
  const password = event.target.elements["password"].value;

  const isValid = registerFormValidator(username, lastname, login, password);

  console.log(isValid); // isValid возвразает объект

  if (isValid) {
    console.log({ data: "success" });
  } else {
    console.log({ data: "not success" });
  }
});
