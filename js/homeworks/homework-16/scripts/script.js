const BASE_URL = "https://jsonplaceholder.typicode.com"

// 1. Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/todos/1. Результат вывести в консоль.

async function getToDo() {
  const response = await fetch(`${BASE_URL}/todos/1`)
  const data = await response.json()

  return data
}

// 2. Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/posts. Ответ должен содержать 10 элементов (query-параметр _limit). Результат вывести в консоль.

async function getPosts() {
  const response = await fetch(`${BASE_URL}/posts?_limit=10`)
  const data = await response.json()

  return data
}

const logResult = async func => console.log(await func())

logResult(getToDo)
logResult(getPosts)
