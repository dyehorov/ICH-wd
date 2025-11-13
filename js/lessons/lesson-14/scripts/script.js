// promise and

// setTimeout and setInterval - функции, который позволяют задавать задержку перед выполнением определенного кода

// setTimeout (установить таймер) - эта функция используется для запуска блока кода после того как пройдет время, заданое в миллисекундах. Выполняется один раз

// setTimeout(() => {
//   console.log("1 seconds past")
// }, 1000)

// setInterval (установить интервал) - будет выводить блок кода после каждого указанного времени

// setInterval(() => {
//   console.log("2 seconds past")
// }, 2000)

// Асинхронный код - это способ выполнения задач, который позволяет продолжать работу с другими задачами, не дожидаясь завершения текущей

// Асинхронный код - это код на выполнение которого неизвестно сколько понадобится времени (самый популярный пример - запрос на бекенд)

// console.log("Start") // 1 на вывод

// setTimeout(() => {
//   // объявлен таймер
//   console.log("hello") // 3 на вывод
// }, 0) // время пошло

// console.log("End") // 2 на вывод

// Всегд сначала выполняется синхронный код, только потом выполнится асинхронный

// Promise - это объект, который содержит будущее значение асинхронной операции. Например, если вы запрашиваете данные с сервера, промис обещает получить эти данные, которые мы сможем использовать в будущем

// 3 состояния Promise
//      1. Pending - инициализировали запрос и ждем ответа, промис в состоянии ожидания
//      2. Resolved/Fullfilled - положительный исход операции
//      3. Rejected - негативный исход

const promise1 = new Promise((resolve, reject) => {
  console.log("Start request...")

  setTimeout(() => {
    console.log("Data received")

    const userData = { name: "Alice", age: 23 } // or null

    if (userData) {
      resolve(userData)
    } else {
      reject()
    }
  }, 2000)
})

// resolve и reject - это как return в функции, останавливает промис

console.log(promise1)

promise1
  .then((user) => {
    console.log(`User name: ${user.name}`)

    return user
  })
  .then((user) => {
    console.log(`User age: ${user.age}`)
  })
  .catch(() => {
    console.log("error")
  })
  .finally(() => {
    console.log("Ended")
  })

// Start request...
// Promise { <pending> }
// Data received
// User name: Alice
// User age: 23
// Ended

// У промиса есть 3 метода
//      1. then - принимает callback функцию и он отработает только тогда когда промис resolve, then'ов может быть много, их можно записывать цепочкой
//      2. catch - так же принимает callback функцию и отработает только если промис reject
//      3. finally - выполнится в любом случае.

// если мы что-то хотим использовать информацию с бекенда в then, то нам надо передать в resolve, тоже самое и catch -> передаем в reject.
