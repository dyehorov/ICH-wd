const container = document.querySelector(".container")

const users = JSON.parse(localStorage.getItem("users")) || []
const authToken = JSON.parse(localStorage.getItem("authToken"))

const currentUser = getUser(users, authToken)

function getUser(users, token) {
  const currentUser = {}

  users.forEach((user) => {
    if (user.token === token) {
      currentUser.login = user.login
      currentUser.email = user.email
      currentUser.phone = user.phone
      currentUser.phone = user.phone
    }
  })

  return currentUser
}

window.addEventListener("DOMContentLoaded", () => {
  const profile = document.createElement("div")
  profile.classList.add("profile")

  const title = document.createElement("h1")
  title.classList.add("profile.title")
  title.textContent = `Welcome, ${currentUser.login}`

  const userInfo = document.createElement("div")
  userInfo.classList.add("user-info")

  const userEmail = document.createElement("p")
  userEmail.classList.add("user-email")
  userEmail.textContent = `Your email: ${currentUser.email}`

  const userPhone = document.createElement("p")
  userPhone.classList.add("user-phone")
  userPhone.textContent = `Your phone: ${currentUser.phone}`

  userInfo.append(userEmail, userPhone)

  const logout = document.createElement("div")
  logout.classList.add("logout")

  const logoutBtn = document.createElement("a")
  logoutBtn.classList.add("logoutBtn", "profileBtn")
  logoutBtn.setAttribute("href", "./login.html")
  logoutBtn.textContent = "Logout"

  const deleteAccountBtn = document.createElement("a")
  deleteAccountBtn.classList.add("deleteAccountBtn", "profileBtn")
  deleteAccountBtn.textContent = "Delete Account"
  deleteAccountBtn.setAttribute("href", "./index.html")

  logout.append(logoutBtn, deleteAccountBtn)

  profile.append(title, userInfo, logout)

  container.appendChild(profile)

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("authToken")
  })

  function deleteUserFromList(users) {
    users.forEach((user, index) => {
      if (user.token === authToken) {
        users.splice(index, 1)
      }
    })

    return users
  }

  deleteAccountBtn.addEventListener("click", () => {
    const updatedUsers = deleteUserFromList(users)

    localStorage.setItem("users", JSON.stringify(updatedUsers))
    localStorage.removeItem("authToken")
  })
})
