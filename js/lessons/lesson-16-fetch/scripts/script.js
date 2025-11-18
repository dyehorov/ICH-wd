// Клиент - серверная архитектура. HTTP - запросы, fetch()

// Клиент - серверная архитектура - описывает взаимодействие между двумя типами комп. программ

// Сервер - это компьютер

// fetch() - метод который принимает url и метод (get, post, put, delete)
//                - get - получить информацию с сервера
//                - post - записать информацию с сервера
//                - put - редактировать существующую инфу на сервере
//                - delete - удалить запись с сервера

// fetch() = это промис, он зарезолвится когда ответить сервер (бекенд)

//https://jsonplaceholder.typicode.com

const todosUrl = "https://jsonplaceholder.typicode.com/todos"

const btn = document.createElement("button")
btn.textContent = "Click me"
document.body.appendChild(btn)

btn.addEventListener("click", () => {
  fetch(todosUrl)
    .then((response) => response.json())
    .then((todos) => {
      const list = document.createElement("ol")

      todos.forEach((element, index) => {
        list.innerHTML += renderTitle(element.title)
      })

      document.body.appendChild(list)
    })
})

function renderTitle(title) {
  return `<li><p>${title}</p></li>`
}
