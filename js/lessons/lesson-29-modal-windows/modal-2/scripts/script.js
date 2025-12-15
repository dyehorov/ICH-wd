const BASE_URL = "https://dummyjson.com"
const openModalBtn = document.querySelector(".openModalBtn")
const modalRegistration = document.querySelector(".modalRegistration")
const modalForm = document.querySelector(".modalForm")
const closeModalButton = document.querySelector(".closeModalBody")

// form
const registrationForm = document.querySelector(".modalForm")

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

async function addUser() {
  const response = await fetch(`${BASE_URL}/users/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: "Muhammad",
      lastName: "Ovi",
      age: 250,
    }),
  })

  const data = await response.json()

  console.log(data)
}

function validatePassword(passwordInput) {
  return passwordInput.length >= 6
}

function isPasswordMatchPasswordRepeat(passwordInput, passwordRepeat) {
  return passwordInput === passwordRepeat
}

registrationForm.addEventListener("submit", event => {
  event.preventDefault()

  const usernameInput = event.target.elements["username"]
  const emailInput = event.target.elements["email"]
  const passwordInput = event.target.elements["password"]
  const passwordInputRepeat = event.target.elements["passwordRepeat"]
  const firstNameInput = event.target.elements["firstName"]
  const lastNameInput = event.target.elements["lastName"]
  const ageInput = event.target.elements["age"]

  const usernameInputContainer = loginInput.parentNode
  const emailInputContainer = emailInput.parentNode
  const passwordInpuContainer = passwordInput.parentNode
  const passwordInputRepeatContainer = passwordInputRepeat.parentNode

  const username = usernameInput.value.trim()
  const email = emailInput.value.trim()
  const password = passwordInput.value.trim()
  const passwordRepeat = passwordInputRepeat.value.trim()
})
