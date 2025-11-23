const userCardsList = document.querySelector(".user-cards")

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
}

function renderUserCard(name, city, company, id, email, phone) {
  const li = document.createElement("li")
  li.className = "card"

  const username = document.createElement("p")
  username.className = "username"
  username.textContent = name

  const userCity = document.createElement("p")
  userCity.className = "user-city"
  userCity.textContent = city

  const userCompanyName = document.createElement("p")
  userCompanyName.className = "user-company-name fw-500"
  userCompanyName.textContent = company

  const userId = document.createElement("span")
  userId.className = "user-id"
  userId.textContent = id

  const userEmail = document.createElement("p")
  userEmail.className = "user-email"
  userEmail.textContent = email

  const userPhone = document.createElement("p")
  userPhone.className = "user-phone"
  userPhone.textContent = phone

  li.append(username, userCity, userCompanyName, userId, userEmail, userPhone)

  return li
}

function listUsers(users) {
  users.forEach((user) =>
    userCardsList.appendChild(
      renderUserCard(
        user.username,
        user.address.city,
        user.company.name,
        user.id,
        user.email,
        user.phone
      )
    )
  )
}

getUsers()
  .then((response) => response.json())
  .then((users) => {
    listUsers(users)
  })
  .catch((error) => console.log(error))
