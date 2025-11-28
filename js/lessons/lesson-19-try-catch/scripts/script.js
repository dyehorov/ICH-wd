// try...catch

// Сначала выполняется блок try, если а нем нет ошибок то блок catch пропускается.

// Если же возникает ошибка - то try блок прерывается и поток управление переходит в начало catch(error). Переменная error (использовать можно любое название) содержит объект ошибки с подробной информацией о произошедшем.

// Когда возникает ошибка, JS генерирует объект, содержащий ее детали. Затем объект передается как аргумент в блок catch.

/*
try {
  
} catch (error) {
  
}
*/

// async function getUsers() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/useыыыыrs"
//     )

//     if (!response.ok) {
//       throw new Error("Сервер вернул ошибку: " + response.status)
//     }

//     const users = await response.json()

//     console.log("Пользователи:")
//     console.log(users)
//   } catch (error) {
//     console.log("Ошибка при загрузке:", error.message)
//   } finally {
//     console.log("Запрос завершён")
//   }
// }

// getUsers()

// Вот 2 примера, в первом примере не используем try...catch и приложение полностью падает, ничего нет на экране, в втором же варианте у нас ошибка перейдет в catch, а там мы ее обработаем и приложение не упадет

// async function loadUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/userrrrs")
//   const users = await response.json() // НЕ выполнится
//   render(users) // НЕ выполнится
// }

// function render(users) {
//   document.body.innerHTML = users.map(u => `<p>${u.name}</p>`).join("")
// }

// loadUsers()

// async function loadUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")

//     if (!response.ok) {
//       throw new Error("Сервер вернул ошибку " + response.status)
//     }

//     const users = await response.json()
//     render(users)
//   } catch (err) {
//     console.log("Ошибка в запросе:", err.message, err.name)
//     renderFallback()
//   }
// }

// function render(users) {
//   document.body.innerHTML =
//     "<h2>Пользователи:</h2>" + users.map(user => `<p>${user.name}</p>`).join("")
// }

// function renderFallback() {
//   document.body.innerHTML = `
//     <h2>Не удалось загрузить данные</h2>
//     <p>Попробуйте обновить страницу или войти позже.</p>
//   `
// }

// loadUsers()

function fakeRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve({
          status: "OK",
          data: {
            username: "John",
            age: 23,
          },
        })
      } else {
        reject("Rejected")
      }
    }, 2000)
  })
}

async function loadData() {
  try {
    const data = await fakeRequest()

    console.log(data.status)
  } catch (error) {
    console.log(error)
  } finally {
    console.log("Request finished")
  }
}

// loadData()

function fakeApiRequest(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve({ id: `${id}`, status: "Success" })
      } else {
        reject(`Request failed for ${id}`)
      }
    }, Math.random() * 2 * 1000)
  })
}

async function loadSequential() {
  for (let i = 1; i <= 3; i++) {
    try {
      const data = await fakeApiRequest(i)
      console.log(`Success: ${data.id} ${data.status}`)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  console.log("All requests finished")
}

// loadSequential()

async function loadParallel() {
  const results = await Promise.allSettled([
    fakeApiRequest(1),
    fakeApiRequest(2),
    fakeApiRequest(3),
  ])

  results.forEach((item, index) => {
    if (item.status === "fulfilled") {
      console.log(`id ${index + 1}: `, item.value.status)
    } else {
      console.log(`id ${index + 1}: `, item.reason)
    }
  })
}

loadParallel()
