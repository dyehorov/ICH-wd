// 1. Используя синтаксис try/catch, отправить запрос на https://jsonplaceholder.typicode.com/posts?userId=1, в блоке catch сделать вывод консоль сообщения об ошибке. Для проверки блока catch сделать намеренную ошибку в url запроса.

const url = "https://jsonplaceholder.typicode.com/posts?userId=1"

async function fetchData(url) {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Error while fetching: ${response.status}`)
    }

    const data = await response.json()

    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
}

fetchData(url)

// 2. Написать функцию, которая делит одно число на другое, обрабатывая возможные ошибки деления на ноль.

function division(num1, num2) {
  try {
    if (num2 === 0) throw new Error("Cannot divide by 0")

    console.log(num1 / num2)
  } catch (error) {
    console.log(error.message)
  }
}

division(2, 0)
