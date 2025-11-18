const loginForm = document.querySelector(".login-form")
const popUpMessage = document.querySelector(".pop-up-message")

const forgotYourPassword = document.querySelector(".forgot-password-btn")

const users = JSON.parse(localStorage.getItem("users")) || []
const authToken = JSON.parse(localStorage.getItem("authToken")) || ""

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

window.addEventListener("DOMContentLoaded", () => {
  if (authToken) {
    location.pathname = "/projects/project-3-form-register-2.0/profile.html"
  }
})

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

  localStorage.setItem("authToken", JSON.stringify(user.token))

  location.pathname = "/projects/project-3-form-register-2.0/profile.html"
})
