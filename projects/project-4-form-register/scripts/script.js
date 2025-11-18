//1) Валидация login: обязательное поле, от 2 - 16 символов, уникальное значение.
// 2) Валидация password: обязательное поле, от 8 символов, обязательное использование как минимум одного спец. символа("!", ".", "&")

const loginForm = document.querySelector(".login-form")
const registrationForm = document.querySelector(".registration-form")
const popUpMessage = document.querySelector(".pop-up-message")

const noAccountButton = document.querySelector(".no-account-btn")
const accountExistButton = document.querySelector(".account-exist")
const forgotYourPassword = document.querySelector(".forgot-password-btn")

const specialSymbols = ["!", ".", "&"]
const users = JSON.parse(localStorage.getItem("users")) || []

noAccountButton.addEventListener("click", () => {
  loginForm.classList.toggle("hidden")
  registrationForm.classList.toggle("hidden")
  clearMessages(registrationForm)
})

accountExistButton.addEventListener("click", () => {
  loginForm.classList.toggle("hidden")
  registrationForm.classList.toggle("hidden")
})

forgotYourPassword.addEventListener("click", () => {
  popUpMessage.classList.add("show-message")
  setTimeout(() => {
    popUpMessage.classList.remove("show-message")
  }, 5000)
})

loginForm.addEventListener("submit", (event) => {
  event.preventDefault()
})

function renderMessage(text, parent, color) {
  const message = document.createElement("p")
  message.classList.add("message-text")
  message.textContent = text
  message.style.color = color

  parent.appendChild(message)
}

function clearMessages(parent) {
  parent
    .querySelectorAll(".message-text")
    .forEach((message) => message.remove())
}

function getUserByLogin(loginInput) {
  let user = null
  for (const element of users) {
    if (element.login === loginInput) {
      user = element
      break
    }
  }

  return user
}

function validateLogin(loginInput) {
  return loginInput.length >= 2 && loginInput.length <= 16
}

function validatePassword(passwordInput) {
  return passwordInput.length >= 8 && hasSpecialSymbol(passwordInput)
}

function hasSpecialSymbol(password) {
  return specialSymbols.some((symbol) => password.includes(symbol))
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const loginInput = event.target.elements["login"]
  const passwordInput = event.target.elements["password"]

  const login = loginInput.value.trim()
  const password = passwordInput.value.trim()

  clearMessages(loginForm)

  if (!login || !password) {
    renderMessage("Please fill in all fields", loginForm, "red")

    return
  }

  const user = getUserByLogin(login)

  if (!user || user.password !== password) {
    renderMessage("Invalid login or password", loginForm, "red")

    return
  }

  renderMessage("You are logged in", loginForm, "green")
  loginForm.reset()
})

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const loginInput = event.target.elements["login"]
  const passwordInput = event.target.elements["password"]
  const passwordInputRepeat = event.target.elements["passwordRepeat"]
  const emailInput = event.target.elements["email"]

  const loginInputContainer = loginInput.parentNode
  const passwordInputRepeatContainer = passwordInputRepeat.parentNode

  const login = loginInput.value.trim()
  const password = passwordInput.value.trim()
  const passwordRepeat = passwordInputRepeat.value.trim()
  const email = emailInput.value.trim()

  const user = getUserByLogin(login)

  clearMessages(registrationForm)

  const isloginValid = validateLogin(login)
  const isPasswordValid = validatePassword(password)

  if (user) {
    renderMessage("User already exists", registrationForm, "red")

    return
  }

  if (!isloginValid) {
    renderMessage(
      "Login must be from 2 to 16 symbols",
      loginInputContainer,
      "red"
    )

    return
  }

  if (!isPasswordValid) {
    renderMessage(
      'Password must be from 8 symbols and have special character ("!", ".", "&")',
      passwordInputRepeatContainer,
      "red"
    )

    return
  }

  if (password === passwordRepeat) {
    users.push({
      login: login,
      password: password,
      email: email,
    })
    renderMessage("User successfully registered", registrationForm, "green")

    localStorage.setItem("users", JSON.stringify(users))

    registrationForm.reset()
  } else {
    renderMessage("Passwords don't match", passwordInputRepeatContainer, "red")
  }
})
