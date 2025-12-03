// // Используя fetch для выполнения GET запроса к JSONPlaceholder  (URL: https://jsonplaceholder.typicode.com/users). Выведите список пользователей в консоль.

// const BASE_URL = "https://jsonplaceholder.typicode.com"

// const fetchUsersBtn = document.querySelector(".fetchUsers")

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => {
//       console.log(error)
//     })
// })

// function fetchUsers() {
//   return fetch(`${BASE_URL}/users`)
// }

// // Используя fetch для выполнения POST запроса к JSONPlaceholder (URL: https://jsonplaceholder.typicode.com/users). Создайте объект пользователя с полями name, username, и email. Отправьте POST запрос с созданным объектом пользователя. Выведите ответ сервера в консоль.

// const createUserBtn = document.querySelector(".createUser")

// const newUser = {
//   name: "Tom",
//   username: "tomy",
//   email: "tom@example.com",
// }

// createUserBtn.addEventListener("click", () => {
//   createUser()
//     .then(response => {
//       if (response.status < 399) {
//         console.log("User created")
//       }

//       return response.json()
//     })
//     .catch(error => {
//       console.log(error)
//     })
// })

// function createUser() {
//   return fetch(`${BASE_URL}/users`, {
//     method: "POST",
//     body: JSON.stringify(newUser),
//     headers: {
//       "Content-type": "application/json",
//     },
//   })
// }

// // Используя fetch для выполнения GET запроса к JSONPlaceholder  (URL: https://jsonplaceholder.typicode.com/posts). Необходимо функцию рендера постов. Отобразить все посты.

// const getPostsList = document.querySelector(".getPostsList")
// const container = document.querySelector(".container")
// const list = document.createElement("ul")
// container.appendChild(list)

// function renderPost(data) {
//   data.forEach(item => {
//     const listElement = document.createElement("li")
//     listElement.innerHTML = `<p>User id: ${item.userId}, id: ${item.id}, title: ${item.title}</p>`

//     list.appendChild(listElement)
//   })
// }

// function getUserPosts() {
//   return fetch(`${BASE_URL}/posts`)
// }

// getPostsList.addEventListener("click", () => {
//   getUserPosts()
//     .then(response => response.json())
//     .then(data => renderPost(data))
//     .catch(error => console.log(error))
// })

// //  Создать форму с полями Имя, Логин, Email, которая будет отправлять запрос на создание пользователя. Используем POST метод. */

// const form = document.createElement("form")

// const nameInput = document.createElement("input")
// nameInput.setAttribute("type", "text")
// nameInput.setAttribute("name", "name")
// nameInput.placeholder = "Enter your name"

// const loginInput = document.createElement("input")
// loginInput.setAttribute("type", "text")
// loginInput.setAttribute("name", "login")
// loginInput.placeholder = "Enter your login"

// const emailInput = document.createElement("input")
// emailInput.setAttribute("type", "email")
// emailInput.setAttribute("name", "email")
// emailInput.placeholder = "Enter your email"

// const submitForm = document.createElement("input")
// submitForm.setAttribute("type", "submit")

// form.append(nameInput, loginInput, emailInput, submitForm)

// container.appendChild(form)

// function createUserFromForm(user) {
//   return fetch(`${BASE_URL}/users`, {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {
//       "Content-type": "application/json",
//     },
//   })
// }

// form.addEventListener("submit", event => {
//   event.preventDefault()

//   const loginInput = event.target.elements["login"]
//   const nameInput = event.target.elements["name"]
//   const emailInput = event.target.elements["email"]

//   const login = loginInput.value.trim()
//   const name = nameInput.value.trim()
//   const email = emailInput.value.trim()

//   if (login.length !== 0 && name.length !== 0 && email.length !== 0) {
//     const user = {
//       name: name,
//       login: login,
//       email: email,
//     }

//     createUserFromForm(user)
//       .then(response => {
//         if (response.status < 399) {
//           console.log("User created")
//         }

//         return response.json()
//       })
//       .catch(error => {
//         console.log(error)
//       })

//     form.reset()
//   }
// })

// //*Используя fetch для выполнения GET запроса к JSONPlaceholder (URL: https://jsonplaceholder.typicode.com/todos). Необходимо написать функции получения и рендера первых 10 todos. Отобразить все todos. Если свойство completed равно true перечеркнуть задачу. К каждой задаче добавить иконку удаления, при клике на которую нужно выполнять DELETE запрос на этот todo.

// const toDoList = document.createElement("ul")
// const getTodosButton = document.createElement("button")
// getTodosButton.textContent = "Get Todos"

// container.append(getTodosButton, toDoList)

// function renderToDo(todos) {
//   todos.forEach((item, index) => {
//     if (index > 9) return

//     const listElement = document.createElement("li")
//     listElement.className = "list-item"
//     listElement.setAttribute("data-id", `${item.id}`)
//     listElement.innerHTML = `<p>${++index}: ${
//       item.title
//     }</p><i class="fa-solid fa-trash-can delete-todo"></i> `

//     if (item.completed === true) {
//       listElement.classList.add("line-through")
//     }

//     toDoList.appendChild(listElement)
//   })
// }

// function getToDos() {
//   return fetch(`${BASE_URL}/todos`)
// }

// getTodosButton.addEventListener("click", () => {
//   toDoList.innerHTML = ""

//   getToDos()
//     .then(response => response.json())
//     .then(data => renderToDo(data))
//     .catch(error => console.log(error))
// })

// toDoList.addEventListener("click", event => {
//   if (event.target.classList.contains("delete-todo")) {
//     const postId = event.target.parentElement.dataset.id

//     deleteTodo(postId).then(response => {
//       if (response.status < 399) {
//         console.log(`Post with id ${postId} deleted`)
//       }
//     })
//   }
// })

// function deleteTodo(itemId) {
//   return fetch(`${BASE_URL}/todos/${itemId}`, {
//     method: "DELETE",
//   })
// }
