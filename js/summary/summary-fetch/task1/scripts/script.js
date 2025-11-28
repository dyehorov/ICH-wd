/*
post object {
"userId": 1,
"id": 1,
"title": "delectus aut autem",
"completed": false
}
user object{
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
"street": "Kulas Light",
"suite": "Apt. 556",
"city": "Gwenborough",
"zipcode": "92998-3874",
"geo": {
"lat": "-37.3159",
"lng": "81.1496"
}
},
"phone": "1-770-736-8031 x56442",
"website": "hildegard.org",
"company": {
"name": "Romaguera-Crona",
"catchPhrase": "Multi-layered client-server neural-net",
"bs": "harness real-time e-markets"
}
}
\_>

merged {
"todoId": 1,
"title": "delectus aut autem",
"completed": false,
"userId": 1,
"name": "Leanne Graham",
"email": "Sincere@april.biz",
}

*/

const BASE_URL = "https://jsonplaceholder.typicode.com"
const todoList = document.querySelector(".todoList")
const filterButtonsContainer = document.querySelector(".filter-buttons")
const filterByUser = document.querySelector("#filter-by-user")

async function fetchUsers() {
  try {
    const response = await fetch(`${BASE_URL}/users`)

    if (!response.ok) throw new Error("Failed to fetch data")

    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

async function fetchTodos() {
  try {
    const response = await fetch(`${BASE_URL}/todos`)

    if (!response.ok) throw new Error("Failed to fetch data")

    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

Promise.all([fetchUsers(), fetchTodos()])
  .then(data => {
    const [users, todos] = data

    users.forEach(({ name }) =>
      filterByUser.appendChild(renderUsersForOptionInSelectFilter(name))
    )

    const mergedUsersWithTodos = todos.map(todo => {
      const user = users.find(user => user.id === todo.userId)

      return {
        todoId: todo.id,
        title: todo.title,
        completed: todo.completed,
        userId: user.id,
        name: user.name,
        email: user.email,
      }
    })

    console.log(mergedUsersWithTodos)

    return mergedUsersWithTodos
  })
  .then(todos => {
    todos.forEach(({ title, completed, name, email }) => {
      todoList.appendChild(renderTodo(title, completed, name, email))
    })

    filterButtonsContainer.addEventListener("click", event => {
      const filterButtonDataSet = event.target.dataset.filter

      filterTodos(filterButtonDataSet)
    })

    function filterTodos(dataset) {
      switch (dataset) {
        case "All":
          todoList.innerHTML = ""

          todos.forEach(({ title, completed, name, email }) => {
            todoList.appendChild(renderTodo(title, completed, name, email))
          })

          break

        case "Completed":
          todoList.innerHTML = ""

          todos
            .filter(item => item.completed === true)
            .forEach(({ title, completed, name, email }) => {
              todoList.appendChild(renderTodo(title, completed, name, email))
            })

          break
        case "Active":
          todoList.innerHTML = ""

          todos
            .filter(item => item.completed === false)
            .forEach(({ title, completed, name, email }) => {
              todoList.appendChild(renderTodo(title, completed, name, email))
            })

          break
        default:
          break
      }
    }

    filterByUser.addEventListener("change", () => {
      const filterByUserOptionValue = filterByUser.value

      filterByUserValue(filterByUserOptionValue)
    })

    function filterByUserValue(username) {
      if (username === "All") {
        todoList.innerHTML = ""

        todos.forEach(({ title, completed, name, email }) => {
          todoList.appendChild(renderTodo(title, completed, name, email))
        })

        return
      }

      todoList.innerHTML = ""
      todos
        .filter(item => item.name === username)
        .forEach(({ title, completed, name, email }) => {
          todoList.appendChild(renderTodo(title, completed, name, email))
        })
    }
  })
  .catch(err => console.log(err))

function renderTodo(title, completed, name, email) {
  const li = document.createElement("li")
  li.className = "todo-list-item"

  const titleEl = document.createElement("h2")
  titleEl.className = "todo-title"
  titleEl.textContent = title

  const statusEl = document.createElement("span")
  statusEl.className = "todo-status"

  if (completed) {
    li.classList.add("completed")
    statusEl.textContent = "Completed"
  } else {
    statusEl.textContent = "Active"
  }

  const usernameEl = document.createElement("p")
  usernameEl.className = "todo-username"
  usernameEl.textContent = name

  const emailEl = document.createElement("span")
  emailEl.className = "todo-email"
  emailEl.textContent = email

  li.append(titleEl, statusEl, usernameEl, emailEl)

  return li
}

function renderUsersForOptionInSelectFilter(username) {
  const option = document.createElement("option")
  option.setAttribute("value", username)
  option.textContent = username

  return option
}
