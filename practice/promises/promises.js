// 1. Создай промис, который через 2 секунды возвращает число 10. После этого в .then выведи удвоенное значение.

const promise = new Promise((resolve) => {
  //   console.log("Promise initialized")

  setTimeout(() => {
    resolve(10)
  }, 2000)
})

// promise.then((result) => console.log(result * 2))

// 2. Сделай промис, который с вероятностью 50% resolve("OK") reject("FAIL") И обработай оба случая.

// console.log("Promise initialized")

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const probability = Math.random() < 0.5

//     if (probability) {
//       resolve("OK")
//     } else {
//       reject(new Error("FAIL"))
//     }
//   }, 2000)
// })

// promise2
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error.message))

// 3. Перепиши код с setTimeout в стиль промисов:

// setTimeout(() => {
//   console.log("A")
//   setTimeout(() => {
//     console.log("B")
//     setTimeout(() => {
//       console.log("C")
//     }, 1000)
//   }, 1000)
// }, 1000)

// function delay(time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, time)
//   })
// }

// delay(1000)
//   .then(() => {
//     console.log("A")

//     return delay(1000)
//   })
//   .then(() => {
//     console.log("B")

//     return delay(1000)
//   })
//   .then(() => console.log("C"))

// 4. Создать функцию task(name, time) Она должна возвращать Promise, который: выполняется через time миллисекунд выводит Task <name> done. Последовательно выполнить задачи:

// Task A — 1000ms

// Task B — 500ms

// Task C — 1500ms

// function task(name, time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Task ${name} done`)
//     }, time)
//   })
// }

// task("A", 1000)
//   .then((result) => {
//     console.log(result)

//     return task("B", 500)
//   })
//   .then((result) => {
//     console.log(result)

//     return task("C", 1500)
//   })
//   .then((result) => {
//     console.log(result)
//   })

/* 
Создай три функции:
1️⃣ fetchUser()
Время выполнения: 1000 ms
Должна вернуть объект:
{ name: "Alex" }

2️⃣ fetchPosts()
Время выполнения: 1500 ms
Должна вернуть массив:
["Post #1", "Post #2"]

3️⃣ fetchComments()
Время выполнения: 500 ms
Должна вернуть строку:
"All comments loaded"

🎯 Требуется:
Выполнить эти функции строго последовательно через цепочку .then():
fetchUser → fetchPosts → fetchComments

И вывести в консоль:
User loaded: Alex
Posts loaded: Post #1, Post #2
Comments loaded
*/

// function fetchUser(time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "Alex" })
//     }, time)
//   })
// }
// function fetchPosts(time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["Post #1", "Post #2"])
//     }, time)
//   })
// }
// function fetchComments(time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("All comments loaded")
//     }, time)
//   })
// }

// fetchUser(1000)
//   .then((result) => {
//     console.log(`User loaded: ${result.name}`)

//     return fetchPosts(1500)
//   })
//   .then((result) => {
//     let posts = ""

//     result.forEach((element) => {
//       if (element !== result[result.length - 1]) {
//         posts += element + ", "
//       } else {
//         posts += element
//       }
//     })

//     console.log(`Posts loaded: ${posts}`)

//     return fetchComments(500)
//   })
//   .then((result) => {
//     console.log(result)
//   })

/* 
Создай три функции, каждая возвращает промис с задержкой:

task1 → 1000 ms, возвращает "Task 1"
task2 → 2000 ms, возвращает "Task 2"
task3 → 1500 ms, возвращает "Task 3"

🎯 Требуется:

Запусти все три задачи ПАРАЛЛЕЛЬНО с помощью Promise.all

Выведи в консоль массив результатов:

["Task 1", "Task 2", "Task 3"]
*/

// function task1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task 1")
//     }, 1000)
//   })
// }

// function task2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task 2")
//     }, 2000)
//   })
// }

// function task3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task 3")
//     }, 1500)
//   })
// }

// Promise.all([task1(), task2(), task3()]).then((result) => {
//   console.log(result)
// })

/*
Задание: Promise.all + ошибки

У тебя есть три задачи:

🎯 Нужно:
Вызвать Promise.all([task1(), task2(), task3()])
Поймать ошибку в .catch

Вывести:
Promise.all failed: ERROR 2
*/

// function task1() {
//   return new Promise((resolve) => setTimeout(() => resolve("OK 1"), 1000))
// }

// function task2() {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => reject("ERROR 2"), 1500)
//   )
// }

// function task3() {
//   return new Promise((resolve) => setTimeout(() => resolve("OK 3"), 500))
// }

// Promise.all([task1(), task2(), task3()])
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((result) => {
//     console.log(`Promise.all failed: ${result}`)
//   })

/* 
1️⃣ Создай три задачи:
task1 — выполняется 1000ms и возвращает "OK 1"
task2 — выполняется 1500ms и РЕЖЕКТИТ с ошибкой "ERROR 2"
task3 — выполняется 500ms и возвращает "OK 3"


Все три задачи должны возвращать Promise.

2️⃣ Используй:
Promise.allSettled([task1(), task2(), task3()])

3️⃣ В then выведи в консоль результат примерно в таком виде:
Task 1 finished: fulfilled | OK 1
Task 2 finished: rejected  | ERROR 2
Task 3 finished: fulfilled | OK 3


Если статус fulfilled → выводишь value

Если rejected → выводишь reason

  Пример структуры результата, которую тебе нужно разобрать:
[
  { status: "fulfilled", value: "OK 1" },
  { status: "rejected", reason: "ERROR 2" },
  { status: "fulfilled", value: "OK 3" }
]
*/

// function task1() {
//   return new Promise((resolve) => setTimeout(() => resolve("OK 1"), 1000))
// }

// function task2() {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => reject("ERROR 2"), 1500)
//   )
// }

// function task3() {
//   return new Promise((resolve) => setTimeout(() => resolve("OK 3"), 500))
// }

// Promise.allSettled([task1(), task2(), task3()]).then((result) => {
//   result.forEach((element, index) => {
//     console.log(
//       `Task ${index + 1} finished: ${element.status} | ${
//         element.value || element.reason
//       }`
//     )
//   })
// })

/* 
Сделай функцию:

function wait(ms) {
  // ...
}


Она должна:

возвращать промис

резолвиться через ms миллисекунд

Пример:

wait(1000).then(() => console.log("1 second passed"))
*/

const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${ms / 1000} second passed`)
    }, ms)
  })

// wait(1000).then((result) => console.log(result))

/*
Задание 2 — последовательные задачи с разным временем

Есть три функции:

function a() { return wait(500).then(() => "A"); }
function b() { return wait(300).then(() => "B"); }
function c() { return wait(700).then(() => "C"); }


Сделай:

a()
  .then((res) => console.log(res))
  .then(b)
  .then((res) => console.log(res))
  .then(c)
  .then((res) => console.log(res))


Вывод должен быть:

A
B
C

*/

// function a() {
//   return wait(500).then(() => "A")
// }
// function b() {
//   return wait(300).then(() => "B")
// }
// function c() {
//   return wait(700).then(() => "C")
// }

// a()
//   .then((res) => console.log(res))
//   .then(b)
//   .then((res) => console.log(res))
//   .then(c)
//   .then((res) => console.log(res))

// function randomTask() {
//   return new Promise((resolve, reject) => {
//     const probability = Math.random()

//     setTimeout(() => {
//       if (probability < 0.5) {
//         resolve("OK")
//       } else {
//         reject("FAIL")
//       }
//     }, 2000)
//   })
// }

// randomTask()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))

// const p1 = wait(1000).then(() => "P1")
// const p2 = wait(500).then(() => "P2")
// const p3 = wait(1500).then(() => "P3")

// Promise.all([p1, p2, p3]).then((result) => console.log(result))

// const slowPromise = wait(1000).then(() => "Slow")
// const fastPromise = wait(300).then(() => "Fast")

// Promise.race([slowPromise, fastPromise]).then((result) => console.log(result))

// function downloadFile(name, time) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`Downloaded: ${name}`), time)
//   })
// }

// const files = [
//   { name: "file1", time: 1000 },
//   { name: "file2", time: 500 },
//   { name: "file3", time: 1200 },
//   { name: "file4", time: 700 },
//   { name: "file5", time: 1500 },
//   { name: "file6", time: 600 },
// ]

// function downloadAll(files, limit) {
//   return new Promise((resolve) => {
//     const results = new Array(files.length)

//     let index = 0
//     let active = 0
//     let completed = 0

//     function startNext() {
//       if (index >= files.length) return

//       const currentIndex = index
//       const { name, time } = files[currentIndex]

//       index++
//       active++

//       downloadFile(name, time).then((result) => {
//         results[currentIndex] = result
//         active--
//         completed++

//         startNext()

//         if (completed === files.length) {
//           resolve(results)
//         }
//       })
//     }

//     for (let i = 0; i < limit; i++) {
//       startNext()
//     }
//   })
// }

// downloadAll(files, 2).then((result) => console.log(result))

/*
Задание: Очередь API-запросов с лимитом

Представь, что у тебя есть функция, которая делает запрос:

function request(id, time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Response for ${id}`), time)
  })
}


И есть список запросов:

const requests = [
  { id: 1, time: 800 },
  { id: 2, time: 400 },
  { id: 3, time: 1200 },
  { id: 4, time: 300 },
  { id: 5, time: 900 }
]

🎯 Требуется:

Создать функцию:

function runRequests(requests, limit) {
  // ...
}


Она должна:

✔ запускать не более limit запросов одновременно
✔ запросы должны выполняться в порядке очереди
✔ результат должен быть массивом ответов

Пример вызова:

runRequests(requests, 2).then((result) => {
  console.log(result)
})


Пример результата:

[
  "Response for 1",
  "Response for 2",
  "Response for 3",
  "Response for 4",
  "Response for 5"
]
*/

function request(id, time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Response for ${id}`), time)
  })
}

const requests = [
  { id: 1, time: 800 },
  { id: 2, time: 400 },
  { id: 3, time: 1200 },
  { id: 4, time: 300 },
  { id: 5, time: 900 },
]

function runRequests(requests, limit) {
  return new Promise((resolve) => {
    const results = new Array(requests.length)

    let index = 0
    let active = 0 // not really usable
    let completed = 0

    function startRequest() {
      if (index >= requests.length) return

      const currentIndex = index
      const { id, time } = requests[currentIndex]

      index++
      active++
      request(id, time).then((result) => {
        results[currentIndex] = result
        active--
        completed++

        startRequest()

        if (completed === requests.length) {
          resolve(results)
        }
      })
    }

    for (let i = 0; i < limit; i++) {
      startRequest()
    }
  })
}

runRequests(requests, 3).then((result) => console.log(result))
