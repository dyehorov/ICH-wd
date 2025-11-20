// 1 этап: верстка
// 2 этап: добавление задачи, подключение к localstorage
// 3 этап: фильтрация, редактирование
// доп. функ: поиск, редактирование задачи(название, время)

// task(entity) {
//   id: String | Number, // Math.random() | Date.now()
//   title: String,
//   date: String | Number,
//   completed: Boolean // false
// }
// const tasks = [
//   {
//     id: 1,
//     title: "Learn React",
//     data: "12.12.2025",
//     completed: false,
//   },
// ]

const tasks = JSON.parse(localStorage.getItem("tasks")) || []
const toDoList = document.querySelector(".to-do-list")
const createTaskInput = document.querySelector(".create-task-form-input")

window.addEventListener("DOMContentLoaded", () => {
  if (tasks.length === 0) {
    toDoList.innerHTML = "<p>Add a task</p>"

    return
  }

  listTasks(tasks)
})

//=======Date=========
const currentWeekday = document.querySelector(".current-weekday")
const currentDate = document.querySelector(".current-date")

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const currentDay = new Date()

currentWeekday.textContent = weekdays[currentDay.getDay()]
currentDate.textContent = `${
  months[currentDay.getMonth()]
} ${currentDay.getDate()}`

//=======Create Task Form==========

const addTaskBtn = document.querySelector(".add-task-btn")
const createTaskForm = document.querySelector(".create-task-form")
const closeTaskForm = document.querySelector(".close-task-form")
const taskDateInput = document.querySelector("input[name='task-date']")

taskDateInput.setAttribute("min", `${currentDay}`)

addTaskBtn.addEventListener("click", () => {
  createTaskForm.classList.remove("hidden")
})

closeTaskForm.addEventListener("click", () => {
  createTaskForm.classList.add("hidden")
  createTaskForm.reset()
})

createTaskForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const taskInput = event.target.elements["task-input"]
  const task = taskInput.value.trim()

  const dateInput = event.target.elements["task-date"].value

  if (task === "") {
    renderErrorMessage("Enter a task", taskInput)

    return
  }

  const taskObj = {
    id: Math.floor(Math.random() * 1_000_000_000),
    title: task,
    date: dateInput,
    completed: false,
  }

  tasks.push(taskObj)

  const orderedTasks = sortListOfTasks([...tasks])

  if (toDoList.firstElementChild.nodeName === "P") {
    toDoList.removeChild(toDoList.firstElementChild)
  }

  toDoList.innerHTML = ""
  listTasks(orderedTasks)

  localStorage.setItem("tasks", JSON.stringify(orderedTasks))
  createTaskForm.reset()
})

function formatDateForTask(dateString) {
  const date = new Date(dateString)

  const datePart = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  })

  const timePart = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  return `${datePart}, ${timePart}`
}

//========Task Render=========

function renderTask(id, title, date, completed) {
  const formattedDate = formatDateForTask(date)

  const listItem = document.createElement("li")
  listItem.classList.add("to-do-list-item")

  listItem.setAttribute("data-item-id", `${id}`)

  const label = document.createElement("label")
  label.classList.add("checkbox")

  const input = document.createElement("input")
  input.classList.add("focus", "list-item-checkbox")
  input.setAttribute("type", "checkbox")

  if (completed === true) {
    listItem.classList.add("completed")
    input.checked = true
  }

  const span = document.createElement("span")
  span.classList.add("checkmark")

  const taskInfoContainer = document.createElement("div")
  taskInfoContainer.classList.add("task-info")

  const taskDate = document.createElement("p")
  taskDate.classList.add("task-date", "task-info-text")
  taskDate.textContent = formattedDate

  const taskText = document.createElement("p")
  taskText.classList.add("task-text", "task-info-text")
  taskText.textContent = title

  label.append(input, span)
  taskInfoContainer.append(taskDate, taskText)

  listItem.append(label, taskInfoContainer)

  toDoList.appendChild(listItem)
}

function listTasks(taskList) {
  taskList.forEach(({ id, title, date, completed }) => {
    renderTask(id, title, date, completed)
  })
}

function renderErrorMessage(messageText, child) {
  const parent = child.parentElement

  if (parent.lastChild.nodeName === "SPAN") {
    parent.removeChild(parent.lastChild)
  }

  const message = document.createElement("span")
  message.textContent = messageText

  parent.appendChild(message)
}

function getNumbersFromDate(date) {
  return new Date(date).getTime()
}

function sortListOfTasks(list) {
  return list.sort((a, b) => {
    const dateA = getNumbersFromDate(a.date)
    const dateB = getNumbersFromDate(b.date)

    return dateA - dateB
  })
}

//======Change to Complete Task=========

toDoList.addEventListener("change", (event) => {
  if (event.target.classList.contains("list-item-checkbox")) {
    const li = event.target.closest(".to-do-list-item")
    li.classList.toggle("completed")
    const id = Number(li.dataset.itemId)

    tasks.find((item) => {
      if (item.id === id) {
        item.completed = !item.completed

        return
      }
    })

    localStorage.setItem("tasks", JSON.stringify(tasks))
  }
})

//===========Filter Tasks=======

const filterButtons = document.querySelector(".filter-buttons")

filterButtons.addEventListener("click", (event) => {
  const dataButton = event.target.dataset.button
  const tasks = JSON.parse(localStorage.getItem("tasks"))

  toDoList.innerHTML = ""

  if (dataButton === "Active") {
    listTasks(filterActiveTasks(tasks))

    return
  }

  if (dataButton === "Completed") {
    listTasks(filterCompletedTasks(tasks))

    return
  }

  listTasks(tasks)
})

function filterActiveTasks(list) {
  return list.filter((item) => item.completed === false)
}

function filterCompletedTasks(list) {
  return list.filter((item) => item.completed === true)
}

//==========Filter Tasks (Input)===========

const searchTaskInput = document.querySelector(".search-task-input")

searchTaskInput.addEventListener("input", (event) => {
  const searchInput = event.target.value.trim()

  toDoList.innerHTML = ""

  listTasks(filterTasksByInput(tasks, searchInput))
})

function filterTasksByInput(list, searchInput) {
  return list.filter(({ title }) => title.includes(searchInput))
}
