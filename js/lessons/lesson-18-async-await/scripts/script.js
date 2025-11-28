// Async/await - грубо говоря замена .then().catch()

// Более простое и удобное написания асинхронного кода

// Позваляет писать асинхронный код в синхронном формате

// Async - это ключевое слово перед функцией, которое указывает, что эта функция будет асинхронной и будет возвращать промис. Внутри функции надо использовать ключевое слово await для ожидания выполнения промиса.

// Await - ключевое слово используется внутри асинхронной функции, для ожидания выполнения промиса.

// Блокирует выполнение функции пока не выполнится асинхронная операция, ждет пока промис зафулфилится

// const foo = async () => {}   запись для стрелочной функции

// async function render() {}

// console.log(render()) // в консоле будет Promise, async явно указывает на то что функция асинхронная, а значит возвращает промис.

const BASE_URL = "https://jsonplaceholder.typicode.com"

// async function getUsers() {
//   const response = await fetch(`${BASE_URL}/users`) // если без await то сразу response выведется в консоль.
//   const data = await response.json()

//   return data
// }

// async function getPosts() {
//   const response = await fetch(`${BASE_URL}/posts`)
//   const data = await response.json()

//   return data
// }

// // async function getData() {
// //   const response = await Promise.all([getUsers(), getPosts()])

// //   console.log(response)
// // }

// async function getData() {
//   const users = await getUsers()
//   console.log(users)

//   const posts = await getPosts()
//   console.log(posts)
// }

// getData()

async function register(userData) {
  const response = await fetch("url/register", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
}

async function createOrder(order) {
  const response = await fetch("url/register", {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json",
    },
  })
}

async function createDocuments() {
  const response = await fetch("url/documents")
  const data = await response.json()

  return data
}

async function signDocuments(signedDocs) {
  const response = await fetch("url/signedDocuments", {
    method: "POST",
    body: JSON.stringify(signedDocs),
    headers: {
      "Content-Type": "application/json",
    },
  })
}

async function makeOrder() {
  await register()

  await createOrder()

  const data = await createDocuments()
  render(data)

  await signDocuments()
}

// 1.Сделайте 3 запроса на сервер https://jsonplaceholder.typicode.com/ с использованием синтаксиса async/await

async function getUsers() {
  const response = await fetch(`${BASE_URL}/users`)
  const data = await response.json()

  console.log(data)
}

async function getPosts() {
  const response = await fetch(`${BASE_URL}/posts`)
  const data = await response.json()

  console.log(data)
}

async function getComments() {
  const response = await fetch(`${BASE_URL}/comments`)
  const data = await response.json()

  console.log(data)
}

// getUsers()
// getComments()
// getPosts()

// Перепишем код так как функции похожи

async function fetchData(path) {
  const response = await fetch(`${BASE_URL}/${path}`)
  const data = await response.json()

  console.log(data)
}

// fetchData("users")
// fetchData("posts")
// fetchData("comments")

// 2.  Перепишите данную функцию на async/await:
//
// fetch( 'https://jsonplaceholder.typicode.com/todos/1')
//      .then (response = response. json ())
//      .then (json => console. log(json)

async function getToDo(id) {
  const response = await fetch(`${BASE_URL}/todos/${id}`)
  const data = await response.json()

  console.log(data)
}

// getToDo(5)

// 3. Перепишите данную функцию на async/await:
/*  function createPost() {
            return fetch( 'https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST', 
                    body: JSON.stringify({ 
                    title: 'foo', 
                    body: 'bar', 
                    userid: 1
                }),
                headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        },
        })
    }
    
    
createPost
    .then ( (response) = response json())
    .then ((json) = console. log (json))
*/

async function createPost() {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userid: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })

  const response = await request.json()
  console.log(response)
}

// createPost()

const urls = [
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/users",
]

// 1. Создать функцию, которая будет отправлять несколько асинхронных запросов на сервер параллельно, используя Promise.all. Дождаться выполнения всех запросов и вернуть массив результатов в том порядке, в котором они были отправлены. Используем новый синтаксис(async/await) в этой во всех последующих задачах.

async function makeRequest(url) {
  const response = await fetch(`${url}`)
  const data = await response.json()

  return data
}

async function getData() {
  const response = await Promise.all(urls.map(item => makeRequest(item)))

  console.log(response)
}

// getData()

// 2. Создать функцию, которая будет отправлять несколько асинхронных запросов на сервер последовательно, используя цикл и await. Дождаться выполнения каждого запроса перед отправкой следующего и вернуть массив результатов в том порядке, в котором они были отправлены.

async function fetchMultipleDataSequential(urls) {
  const results = []

  for (const url of urls) {
    const response = await fetch(url)
    const data = await response.json()
    results.push(data)
  }

  console.log(results)
}

fetchMultipleDataSequential(urls)

// 3***. Создать функцию, которая будет отправлять асинхронные запросы на сервер каждые 5 секунд, используя setInterval и await. Продолжать отправку запросов до тех пор, пока не будет получен определенный результат(например ошибка) или не пройдет определенное количество попыток.

// fetchWithInterval('/database', 15, "connected", 5000);

async function fetchWithInterval(url, maxAttempts, desiredResult, ms) {
  return new Promise(resolve => {
    let attempts = 1

    const interval = setInterval(async () => {
      attempts++

      const response = await fetch(url)
      const data = await response.json()

      if (data.status === desiredResult) {
        clearInterval(interval)
        return resolve("Success")
      }

      if (attempts === maxAttempts) {
        clearInterval(interval)
        return resolve("Max attempts reached")
      }
    }, ms)
  })
  //   let attempts = 0

  //   while (attempts < maxAttempts) {
  //     const response = await fetch(url)
  //     const data = await response.json()

  //     if (data === desiredResult) {
  //       return data
  //     }

  //     attempts++

  //     await new Promise(resolve => setTimeout(resolve, ms))
  //   }

  //   throw new Error("Did not get a result")
}

fetchWithInterval(
  "https://jsonplaceholder.typicode.com/users",
  3,
  "connected",
  1000
).then(data => console.log(data))

// 4***. Создать функцию, которая будет отправлять асинхронные запросы на сервер с задержкой, используя setTimeout и await. Задержка должна быть случайной в пределах определенного диапазона. Дождаться выполнения каждого запроса перед отправкой следующего и вернуть массив результатов в том порядке, в котором они были отправлены.

// async function fetchMultipleDataWithRandomDelay(urls, minDelay, maxDelay) {} // fetchMultipleDataWithRandomDelay(urls, 2000, 10000);

// 5. Создать функцию, которая будет отправлять несколько асинхронных запросов на сервер параллельно, используя Promise.race. Дождаться выполнения любого из запросов и вернуть его результат. // const urls = [ // "https://jsonplaceholder.typicode.com/todos", // "https://jsonplaceholder.typicode.com/comments", // "https://jsonplaceholder.typicode.com/users", // ];

// async function fetchRace(urls) {}
