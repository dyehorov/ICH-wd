/* Создайте HTML-форму с двумя полями ввода: для логина и пароля, а также кнопкой "Войти".

Используя JavaScript и DOM, напишите скрипт, который будет проверять, совпадают ли введенные значения с заранее заданными значениями логина и пароля (их нужно самому придумать и заранее указать в скрипте).

Если значения совпадают, выведите сообщение об успешной аутентификации, в противном случае - сообщение об ошибке.
*/

const loginCredentials = {
  login: "test",
  password: "123",
};

const form = document.querySelector("form");

function checkIfTheLoginCorrect(correctLogin, login) {
  return correctLogin === login;
}

function checkIfThePasswordCorrect(correctPassword, password) {
  return correctPassword === password;
}

function getAuthentificationMessage(valid) {
  if (valid) {
    return "Succesful authentification";
  }

  return "Error, check what you entered";
}

function isMessageExist() {
  if (form.lastElementChild.nodeName === "P") {
    form.lastElementChild.remove();
  }
}

function renderFormMessage(string) {
  const message = document.createElement("p");
  message.textContent = string;

  form.appendChild(message);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const loginInput = event.target.elements["login"].value;
  const passwordInput = event.target.elements["password"].value;

  const isValid =
    checkIfTheLoginCorrect(loginCredentials.login, loginInput) &&
    checkIfThePasswordCorrect(loginCredentials.password, passwordInput);

  isMessageExist();
  renderFormMessage(getAuthentificationMessage(isValid));
});
