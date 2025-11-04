// Создать HTML-форму, которая включает в себя:
/* 1. Поля ввода:
            фамилии
            имени
            email
            пароля
            
1.Кнопки отправки и очистки
2.Чекбокс с текстом “Подписаться на email рассылку”
Поле ввода почты должно содержать символ “@”, пароль должен быть длиннее 6 символов, в случае ошибки, выводить текст, содержащий сообщение об ошибке.
Если все условия выполнены, очистить поля формы и показать сообщение об успехе. */

const form = document.querySelector(".form");
const emailBlock = document.querySelector(".email-block");
const passwordBlock = document.querySelector(".password-block");
const successMessage = document.querySelector(".form-success");

function isEmailValid(email) {
  for (const element of email) {
    if (element === "@") {
      return "";
    }
  }

  return "Email must contain the “@” symbol";
}

function isPasswordValid(password) {
  if (password.length > 6) {
    return "";
  }

  return "Password must be longer than 6 characters";
}

function renderError(emailError, passwordError) {
  if (emailBlock.lastElementChild.nodeName === "P") {
    emailBlock.lastElementChild.remove();
  }

  if (passwordBlock.lastElementChild.nodeName === "P") {
    passwordBlock.lastElementChild.remove();
  }

  if (emailError) {
    const emailErrorText = document.createElement("p");
    emailErrorText.classList.add("error");
    emailErrorText.textContent = emailError;
    emailBlock.appendChild(emailErrorText);
  }

  if (passwordError) {
    const passwordErrorText = document.createElement("p");
    passwordErrorText.classList.add("error");
    passwordErrorText.textContent = passwordError;
    passwordBlock.appendChild(passwordErrorText);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = event.target.elements["email"].value;
  const passwordInput = event.target.elements["password"].value;

  const isEmailValidResult = isEmailValid(emailInput);
  const isPasswordValidResult = isPasswordValid(passwordInput);

  renderError(isEmailValid(emailInput), isPasswordValid(passwordInput));

  if (!isEmailValidResult && !isPasswordValidResult) {
    successMessage.classList.add("active");
    form.reset();
  } else {
    successMessage.classList.remove("active");
  }
});
