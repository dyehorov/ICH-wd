const BASE_URL = "https://dummyjson.com"
const openModalBtn = document.querySelector(".openModalBtn")
const modalRegistration = document.querySelector(".modalRegistration")
const modalForm = document.querySelector(".modalForm")
const closeModalButton = document.querySelector(".closeModalBody")
const submitBtn = document.querySelector(".submitBtn")
const cancelBtn = document.querySelector(".cancelBtn")
const formInputs = document.querySelectorAll(".form-input")
const checkBox = document.querySelector("input[type='checkbox']")
const loader = document.querySelector(".loader")
let isErrorPresentInForm = true

// form
const registrationForm = document.querySelector(".modalForm")
const passwordValue = document.querySelector("#password")

const toggleModalWindow = () => {
  modalRegistration.classList.toggle("modalHidden")
}

openModalBtn.addEventListener("click", toggleModalWindow)
modalRegistration.addEventListener("click", toggleModalWindow)
modalForm.addEventListener("click", event => event.stopPropagation())

// close via ESC
document.addEventListener("keyup", event => {
  if (event.key === "Escape") {
    modalRegistration.classList.add("modalHidden")
  }
})

// close via btn (close icon)
closeModalButton.addEventListener("click", toggleModalWindow)

async function addUser(user) {
  const response = await fetch(`${BASE_URL}/users/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })

  const data = await response.json()

  return { response, data }
}

function validatePassword(passwordInput) {
  return passwordInput.length >= 6
}

function isPasswordMatchPasswordRepeat(passwordInput, passwordRepeat) {
  return passwordInput === passwordRepeat
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

function renderMessage(text, parent, color) {
  const message = document.createElement("p")
  message.classList.add("message-text")
  message.textContent = text
  message.style.color = color

  parent.appendChild(message)
}

function clearMessages(parent) {
  parent.querySelectorAll(".message-text").forEach(message => message.remove())
}

registrationForm.addEventListener("input", event => {
  const input = event.target
  const inputContainer = event.target.parentNode

  switch (input.id) {
    case "password":
      if (!validatePassword(input.value)) {
        if (inputContainer.lastElementChild.nodeName === "P") return

        renderMessage(
          "Password length must be at least 6 symbols",
          inputContainer,
          "red"
        )

        input.classList.add("error")
      } else {
        if (inputContainer.lastElementChild.nodeName === "P") {
          inputContainer.removeChild(inputContainer.lastElementChild)
          input.classList.remove("error")
        }
      }

      break
    case "passwordConfirm":
      if (!isPasswordMatchPasswordRepeat(passwordValue.value, input.value)) {
        if (inputContainer.lastElementChild.nodeName === "P") return

        renderMessage("Passwords don't match", inputContainer, "red")
        input.classList.add("error")
      } else {
        if (inputContainer.lastElementChild.nodeName === "P") {
          inputContainer.removeChild(inputContainer.lastElementChild)

          input.classList.remove("error")
        }
      }

      break
    case "email":
      if (!validateEmail(input.value)) {
        if (inputContainer.lastElementChild.nodeName === "P") return

        renderMessage("Enter a valid email", inputContainer, "red")
        input.classList.add("error")
      } else {
        if (inputContainer.lastElementChild.nodeName === "P") {
          inputContainer.removeChild(inputContainer.lastElementChild)

          input.classList.remove("error")
        }
      }

      break

    case "age":
      if (input.value < 18 || input.value > 100) {
        if (inputContainer.lastElementChild.nodeName === "P") return

        renderMessage(
          "The age must be between 18 and 100",
          inputContainer,
          "red"
        )
        input.classList.add("error")
      } else {
        if (inputContainer.lastElementChild.nodeName === "P") {
          inputContainer.removeChild(inputContainer.lastElementChild)

          input.classList.remove("error")
        }
      }

      break
  }

  isErrorPresentInForm = [...formInputs].some(input => {
    return input.value.trim() === "" || input.classList.contains("error")
  })

  submitBtn.disabled = !isErrorPresentInForm && checkBox.checked ? false : true
})

registrationForm.addEventListener("submit", async event => {
  event.preventDefault()

  submitBtn.disabled = true
  submitBtn.value = "Registering..."
  showLoader()

  const user = {
    username: username.value,
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
    age: Number(age.value),
  }

  try {
    const { response, data } = await addUser(user)

    if (!response.ok) {
      clearMessages(modalForm)

      renderMessage(data.message || "Registration error", modalForm, "red")
      return
    }

    console.log(data)

    const isUsernameAlreadyExist = await isUsernameExists(user.username)

    if (isUsernameAlreadyExist) {
      clearMessages(modalForm)

      renderMessage("User with such username already exists", modalForm, "red")
      submitBtn.value = "Register"
      hideLoader()

      return
    }

    clearMessages(modalForm)
    renderMessage("Successfully registered", modalForm, "green")
  } catch (error) {
    clearMessages(modalForm)
    renderMessage("Error with registering", modalForm, "red")
  }

  setTimeout(() => {
    hideLoader()

    submitBtn.disabled = false
    submitBtn.value = "Register"
    modalForm.reset()
  }, 2000)
})

function showLoader() {
  loader.classList.add("active")
  modalForm.classList.add("modalHidden")
}

function hideLoader() {
  loader.classList.remove("active")
  modalForm.classList.remove("modalHidden")
}

cancelBtn.addEventListener("click", event => {
  event.preventDefault()
  modalRegistration.classList.add("modalHidden")
  modalForm.reset()
})

async function isUsernameExists(username) {
  try {
    const response = await fetch(
      `${BASE_URL}/users/filter?key=username&value=${username}`
    )

    const data = await response.json()

    if (data.total === 0) {
      return false
    }

    return true
  } catch (error) {
    console.log(error)
  }
}
