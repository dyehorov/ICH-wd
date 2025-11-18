const BASE_URL = "https://jsonplaceholder.typicode.com"

const makeRequestBtn = document.querySelector(".requestBtn")

makeRequestBtn.addEventListener("click", () => getUserByUsernameAndID())

// GET
function getUsers() {
  return fetch(`${BASE_URL}/users`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

// POST

const newPost = {
  userId: 4,
  title: "Hello Post",
  body: "This is my first POST",
}

function createPost() {
  return fetch(`${BASE_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

// PUT - меняет целый ресурс, например пост

function editPost() {
  return fetch(`${BASE_URL}/posts/1`, {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error))
}

// PATCH - меняет конкретное свойство ресурса

function patchingPost() {
  return fetch(`${BASE_URL}/posts/1`, {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
}

// DELETE - удаляет ресурс

function deletePost() {
  return fetch(`${BASE_URL}/posts/1`, {
    method: "DELETE",
  })
}

// QUERRY parametrs

// "https://jsonplaceholder.typicode.com/posts?id=31" - запрос с маршрутом posts и querry параметром id = 31 (получить пост в котором id=31)
// "https://jsonplaceholder.typicode.com/posts?id=31&userId=4" - получить пост с id=31 и userId=4

function getUserByEmail() {
  return fetch(`${BASE_URL}/comments?email=Lew@alysha.tv`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

function getUserByUsernameAndID() {
  return fetch(`${BASE_URL}/users?username=Karianne&id=4`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

//2.Сделайте запрос на https://jsonplaceholder.typicode.com. Укажите path/route /users. Далее укажите query параметр username со значением Karianne и id 4.
