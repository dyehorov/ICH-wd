// Методы конструктора массива

// Доля методов конструктора экземпляр не нужен

const result = Array.isArray([1, 2, 3])
console.log(result) // true

const result2 = Array.isArray("2rwef")
console.log(result2) // false

// Array.isArray() - проверяет является ли переданные данные массивом или нет, возвращает true если массив, false если не массив

// Методы промисов

// Promise.resolve() - возвразщает промис который сразу resolve()

const resolvedPromise = Promise.resolve("Success")

resolvedPromise.then(console.log)

// Promise.resolve() - возвразщает промис который был отклоннен с указаной причиной

// const rejectedPromise = Promise.reject("Error")

// rejectedPromise.then(console.error)

// Promice.all() - метод, который возвращает промис

// Отработает когда все зарезолвятся промисы или какой-то реджектится, если реджектится сразу промис отрабатывает, не дорабатывая остальные

function fetchDataPart1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("123")
    }, 2500)
  })
}
function fetchDataPart2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("456")
    }, 1500)
  })
}
function fetchDataPart3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("789")
    }, 3500)
  })
}

// Promise.all([fetchDataPart1(), fetchDataPart2(), fetchDataPart3()])
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error))

// Promice.allSettled - возвращает промис, который исполняется когда все полученые промисы завершились, не важно резолв или реджект

Promise.allSettled([fetchDataPart1(), fetchDataPart2(), fetchDataPart3()]).then(
  (data) => console.log(data)
)

// Promise.any() - вернет первый зарезолвеный промис

Promise.any([fetchDataPart1(), fetchDataPart2(), fetchDataPart3()]).then(
  (data) => console.log(data) // вернет 456, так как быстрее всех зарезолвился
)

const waitForTime = (ms) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve("Wait finished")
    }, ms)
  )

//Promise.race() - вернет самый первый отработаный промис, не важно зарезолвился или зареджектился

Promise.race([fetchDataPart1(), fetchDataPart2(), fetchDataPart3()]).then(
  (data) => console.log(data) //
)

waitForTime(5000).then((result) => console.log(result))
