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
  return (
    loginInput.length >= 2 &&
    loginInput.length <= 26 &&
    onlyLettersInLogin(loginInput)
  )
}

function onlyLettersInLogin(loginInput) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  for (let i = 0; i < loginInput.length; i++) {
    for (const number of numbers) {
      if (loginInput[i] == number) {
        return false
      }
    }
  }

  return true
}

function validatePassword(passwordInput) {
  return passwordInput.length >= 5 && passwordInput.length <= 26
}

function validateEmail(emailInput) {
  return emailInput.length >= 7
}

function validatePhone(phoneInput) {
  return (
    phoneInput[0] === "+" &&
    phoneInput.length >= 8 &&
    phoneInput.length <= 12 &&
    hasOnlyNumbers(phoneInput)
  )
}

function hasOnlyNumbers(phoneInput) {
  for (let i = 1; i <= phoneInput.length - 1; i++) {
    if (Number(phoneInput[i]) || phoneInput[i] == 0) {
      continue
    } else {
      return false
    }
  }

  return true
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
  const phoneInput = event.target.elements["phone"]

  const loginInputContainer = loginInput.parentNode
  const passwordInpuContainer = passwordInput.parentNode
  const passwordInputRepeatContainer = passwordInputRepeat.parentNode
  const emailInputContainer = emailInput.parentNode
  const phoneInputContainer = phoneInput.parentNode

  const login = loginInput.value.trim()
  const password = passwordInput.value.trim()
  const passwordRepeat = passwordInputRepeat.value.trim()
  const email = emailInput.value.trim()
  const phone = phoneInput.value.trim()

  const user = getUserByLogin(login)

  clearMessages(registrationForm)

  const isloginValid = validateLogin(login)
  const isPasswordValid = validatePassword(password)
  const isEmailValid = validateEmail(email)
  const isPhoneValid = validatePhone(phone)

  if (user) {
    renderMessage("User already exists", registrationForm, "red")

    return
  }

  if (!isEmailValid) {
    renderMessage(
      "Email length must be at least 7 symbols",
      emailInputContainer,
      "red"
    )

    return
  }

  if (!isloginValid) {
    renderMessage(
      "Login must be from 2 to 24 symbols and have only letters",
      loginInputContainer,
      "red"
    )

    return
  }

  if (!isPasswordValid) {
    renderMessage(
      "Password length must be from 5 symbols to 26",
      passwordInpuContainer,
      "red"
    )

    return
  }

  if (password !== passwordRepeat) {
    renderMessage("Passwords don't match", passwordInputRepeatContainer, "red")

    return
  }

  if (!isPhoneValid) {
    renderMessage(
      "Phone must start with '+' symbol and from 8 to 12 numbers long",
      phoneInputContainer,
      "red"
    )

    return
  }

  users.push({
    login: login,
    password: password,
    email: email,
    phone: phone,
  })
  renderMessage("User successfully registered", registrationForm, "green")

  localStorage.setItem("users", JSON.stringify(users))

  registrationForm.reset()
})
