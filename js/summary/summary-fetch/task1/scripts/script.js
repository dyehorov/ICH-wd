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
const statisticsContainer = document.querySelector(".statistics")

const todosData = []
let filterButtonDataSet = "All"

window.addEventListener("DOMContentLoaded", getData)

//==========Fetch===========

async function fetchUsers() {
  try {
    const response = await fetch(`${BASE_URL}/users`)

    if (!response.ok) throw new Error("Failed to fetch data")

    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)

    return []
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

    return []
  }
}

async function getData() {
  const [users, todos] = await Promise.all([fetchUsers(), fetchTodos()])

  users.forEach(({ id, name }) =>
    filterByUser.appendChild(createUserOptionsForFilter(id, name))
  )

  todos.forEach(todo => {
    const user = users.find(user => user.id === todo.userId)

    todosData.push({
      todoId: todo.id,
      title: todo.title,
      completed: todo.completed,
      userId: user?.id,
      name: user?.name,
      email: user?.email,
    })
  })

  renderList(todosData)
  renderStatistics(todosData)
}

//=========TodoItems=========

function createTodoItem(title, completed, name, email) {
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
  usernameEl.textContent = name || "-"

  const emailEl = document.createElement("span")
  emailEl.className = "todo-email"
  emailEl.textContent = email || "-"

  li.append(titleEl, statusEl, usernameEl, emailEl)

  return li
}

function renderList(list) {
  todoList.innerHTML = ""
  list.forEach(({ title, completed, name, email }) => {
    todoList.appendChild(createTodoItem(title, completed, name, email))
  })
}

function renderStatistics(list) {
  statisticsContainer.innerHTML = ""

  const allTasks = document.createElement("p")
  allTasks.className = "all-tasks"

  const allTasksAmount = list.length
  allTasks.textContent = `All tasks: ${allTasksAmount}`

  const completedTasks = document.createElement("p")
  completedTasks.className = "completed-tasks"

  const completedTasksAmount = list.filter(
    todo => todo.completed === true
  ).length
  completedTasks.textContent = `Completed: ${completedTasksAmount} (${Math.floor(
    (completedTasksAmount / allTasksAmount) * 100
  )}%)`

  const leftTasks = document.createElement("p")
  leftTasks.className = "left-tasks"

  leftTasks.textContent = `Left tasks ${allTasksAmount - completedTasksAmount}`

  statisticsContainer.append(allTasks, completedTasks, leftTasks)
}

function createUserOptionsForFilter(id, name) {
  const value = id
  const viewValue = name

  const option = document.createElement("option")
  option.setAttribute("value", value)
  option.textContent = viewValue

  return option
}

//=========Events=========

filterButtonsContainer.addEventListener("click", event => {
  if (event.target.tagName !== "BUTTON") return
  ;[...filterButtonsContainer.children].forEach(btn =>
    btn.classList.remove("active")
  )
  event.target.classList.add("active")

  filterButtonDataSet = event.target.dataset.filter

  const filterParams = getFilterParams(filterButtonDataSet, filterByUser.value)

  const filtered = filterTodos(todosData, filterParams)

  renderList(filtered)
  renderStatistics(filtered)
})

filterByUser.addEventListener("change", event => {
  const filterParams = getFilterParams(filterButtonDataSet, event.target.value)

  const filtered = filterTodos(todosData, filterParams)

  renderList(filtered)
  renderStatistics(filtered)
})

//=========Filter=========

function getFilterParams(state, user) {
  const stateMap = {
    All: null,
    Active: false,
    Completed: true,
  }

  return {
    todoState: stateMap[state],
    user: user === "All" ? null : user,
  }
}

function filterUsers({ userId }, { user }) {
  if (user === null) {
    return true
  }

  return userId === +user
}

function filterTodoState({ completed }, { todoState }) {
  if (todoState === null) {
    return true
  }

  return todoState === completed
}

function filterTodos(todoListItems, filterParams) {
  return todoListItems
    .filter(todoItem => filterUsers(todoItem, filterParams))
    .filter(todoItem => filterTodoState(todoItem, filterParams))
}
