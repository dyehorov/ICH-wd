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

const tasks = JSON.parse(localStorage.getItem("tasks")) || []

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

  console.log(formatDateForDisplay(dateInput))

  const taskObj = {
    id: Math.floor(Math.random() * 1_000_000_000),
    title: task,
    date: formatDateForDisplay(dateInput),
    completed: false,
  }

  localStorage.setItem("tasks", JSON.stringify(taskObj))
})

function formatDateForDisplay(dateString) {
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
