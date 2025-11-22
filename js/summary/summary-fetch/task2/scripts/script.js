/*


*/

const BASE_URL = "https://jsonplaceholder.typicode.com"

const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/comments",
]

const container = document.querySelector(".container")
const postsList = document.querySelector(".posts-list")

function createPost(author, id, title, body, commentsCount) {
  const li = document.createElement("li")
  li.className = "post-list-item"
  li.setAttribute("data-id", `${id}`)

  const authorEl = document.createElement("span")
  authorEl.className = "post-author-name"
  authorEl.textContent = author

  const titleEl = document.createElement("h2")
  titleEl.className = "post-title"
  titleEl.textContent = title

  const bodyEl = document.createElement("p")
  bodyEl.className = "post-body"
  bodyEl.textContent = body

  const commentsContainer = document.createElement("div")
  commentsContainer.className = "comments"

  const icon = document.createElement("i")
  icon.className = "fa-regular fa-comment fa-sm"

  const commentsCountEl = document.createElement("span")
  commentsCountEl.className = "number-of-comments"
  commentsCountEl.textContent = commentsCount

  commentsContainer.appendChild(icon)
  commentsContainer.appendChild(commentsCountEl)

  li.appendChild(authorEl)
  li.appendChild(titleEl)
  li.appendChild(bodyEl)
  li.appendChild(commentsContainer)

  return li
}

function getPosts() {
  return fetch(`${BASE_URL}/posts`).then((response) => response.json())
}

function getUsers() {
  return fetch(`${BASE_URL}/users`).then((response) => response.json())
}

function getComments() {
  return fetch(`${BASE_URL}/comments`).then((response) => response.json())
}

Promise.all([getComments(), getPosts(), getUsers()])
  .then(([comments, posts, users]) => {
    const commentsByPostId = comments.reduce((accum, comment) => {
      if (!accum[comment.postId]) {
        accum[comment.postId] = []
      }

      accum[comment.postId].push(comment)

      return accum
    }, {})

    const usersById = users.reduce((accum, user) => {
      if (!accum[user.id]) {
        accum[user.id] = user
      }

      return accum
    }, {})

    return posts.map((post) => {
      return {
        ...post,
        userId: post.userId,
        user: {
          name: usersById[post.userId].name,
          email: usersById[post.userId].email,
        },
        comments: commentsByPostId[post.id],
      }
    })
  })
  .then((posts) =>
    posts.forEach((post) => {
      postsList.appendChild(
        createPost(
          post.user.name,
          post.id,
          post.title,
          post.body,
          post.comments.length
        )
      )
    })
  )

//===========Render comments==========

function createComment(author, email, name, text) {
  const li = document.createElement("li")
  li.className = "comment"

  const authorEl = document.createElement("span")
  authorEl.className = "comment-author"
  authorEl.textContent = author

  const emailEl = document.createElement("span")
  emailEl.className = "author-email"
  emailEl.textContent = email

  const nameEl = document.createElement("p")
  nameEl.className = "comment-name"
  nameEl.textContent = name

  const textEl = document.createElement("p")
  textEl.className = "comment-text"
  textEl.textContent = text

  li.appendChild(authorEl)
  li.appendChild(emailEl)
  li.appendChild(nameEl)
  li.appendChild(textEl)

  return li
}

function renderComments(comments) {
  const list = document.querySelector(".comments-list")
  list.innerHTML = ""

  comments.forEach((comment) => {
    list.appendChild(
      createComment(comment.name, comment.email, comment.name, comment.body)
    )
  })
}
