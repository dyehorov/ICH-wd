// const loginBtn = document.querySelector(".loginBtn")
// function login() {
//   return new Promise((resolve, reject) => {
//     console.log("logging in...")
//     setTimeout(() => {
//       const userData = null // { name: "Alice", age: 45 };
//       if (userData) {
//         console.log("You logged in!")
//         resolve(userData)
//       } else {
//         console.log("Login failed")
//         reject("Errorrrrrrrrrrrrrr with logging in")
//       }
//     }, 2000)
//   })
// }
// loginBtn.addEventListener("click", () => {
//   login()
//     .then((data) => {
//       const h2 = document.createElement("h2")
//       h2.textContent = data.name
//       document.body.appendChild(h2)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// })

// function checkEvenNumber(number) {
//   return new Promise((resolve, reject) => {
//     console.log("Checking if number is even")

//     setTimeout(() => {
//       if (number % 2 === 0) {
//         console.log("Even")

//         resolve()
//       } else {
//         console.log("Odd")

//         reject()
//       }
//     }, 2000)
//   })
// }

// checkEvenNumber(5)
// checkEvenNumber(2)

// 2.Создайте функцию fetchData, которая возвращает Promise. Используйте setTimeout, чтобы имитировать задержку при загрузке данных с сервера. Если данные успешно загружены, выполните resolve с данными, иначе выполните reject с сообщением об ошибке.

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     console.log("Fetching data...")

//     setTimeout(() => {
//       const response = {
//         success: true,
//         data: {
//           name: "Alice",
//           age: 23,
//           email: "dasda@gmail.com",
//         },
//       }

//       if (response.success) {
//         resolve(response.data)
//       } else {
//         reject("404 Error")
//       }
//     }, 2000)
//   })
// }

// fetchData()
//   .then(({ name, age, email }) => {
//     console.log(name, age, email)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// 3.Создайте функцию generateRandomNumber, которая возвращает Promise. Используйте setTimeout для имитации вычислений. Если число успешно сгенерировано, выполните resolve с числом, иначе выполните reject с сообщением об ошибке.
