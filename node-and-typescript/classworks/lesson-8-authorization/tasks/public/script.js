const registerForm = document.querySelector("#register-form")
const loginForm = document.querySelector("#login-form")
const editForm = document.querySelector("#edit-user-form")
const resultMessage = document.querySelector(".result")

registerForm.addEventListener("submit", async event => {
  event.preventDefault()

  const formData = new FormData(registerForm)

  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
    name: formData.get("name"),
  }

  const response = await fetch("http://127.0.0.1:3333/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (result.error) {
    resultMessage.innerText = result.message

    return
  }

  const { message, name, email } = result

  resultMessage.innerText = `${message}. Name: ${name}. Email: ${email}`
})

loginForm.addEventListener("submit", async event => {
  event.preventDefault()

  const formData = new FormData(loginForm)

  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  }

  const response = await fetch("http://127.0.0.1:3333/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  const result = await response.json(response)

  if (result.error) {
    resultMessage.innerText = result.message

    return
  }

  const { message, name, email } = result

  resultMessage.innerText = `${message}. Name: ${name}. Email: ${email}`
})

editForm.addEventListener("submit", async event => {
  event.preventDefault()

  const formData = new FormData(editForm)

  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
    name: formData.get("name"),
  }

  const response = await fetch(
    `http://127.0.0.1:3333/profile/${formData.get("userId")}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  )

  const result = await response.json(response)

  if (result.error) {
    resultMessage.innerText = result.message

    return
  }

  const { message, name, email, username } = result

  resultMessage.innerText = `${message}. Name: ${name}. Email: ${email}, Username: ${username}`
})
