const BASE_URL = "https://jsonplaceholder.typicode.com"

const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/comments",
]

const container = document.querySelector(".container")
const postsList = document.querySelector(".posts-list")
const commentsModalWindow = document.querySelector(".comments-modal-window")
const commentsList = document.querySelector(".comments-list")

function createPostCard(author, id, title, body, commentsCount) {
  const li = document.createElement("li")
  li.className = "post-list-item"
  li.setAttribute("data-id", `${id}`)

  const authorEl = document.createElement("p")
  authorEl.className = "post-author-name"
  authorEl.textContent = author

  const titleEl = document.createElement("h2")
  titleEl.className = "post-title"
  titleEl.textContent = title

  const bodyEl = document.createElement("p")
  bodyEl.className = "post-body"
  bodyEl.textContent = body

  const icon = document.createElement("i")
  icon.className = "fa-regular fa-comment comment-icon"

  const commentsCountEl = document.createElement("span")
  commentsCountEl.className = "number-of-comments comment-icon"
  commentsCountEl.textContent = commentsCount

  li.append(authorEl, titleEl, bodyEl, icon, commentsCountEl)

  return li
}

async function getPosts() {
  const response = await fetch(`${BASE_URL}/posts`)
  return await response.json()
}

async function getUsers() {
  const response = await fetch(`${BASE_URL}/users`)
  return await response.json()
}

async function getComments() {
  const response = await fetch(`${BASE_URL}/comments`)
  return await response.json()
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

    postsList.addEventListener("click", event => {
      if (!event.target.classList.contains("comment-icon")) return

      commentsModalWindow.classList.remove("hidden")

      const targetPost = event.target.parentElement.dataset.id

      renderComments(commentsByPostId[targetPost])
    })

    const usersById = users.reduce((accum, user) => {
      if (!accum[user.id]) {
        accum[user.id] = user
      }

      return accum
    }, {})

    return posts.map(post => {
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
  .then(posts => {
    posts.forEach(post => {
      postsList.appendChild(
        createPostCard(
          post.user.name,
          post.id,
          post.title,
          post.body,
          post.comments.length
        )
      )
    })
  })

//===========Render comments==========

function createComment(name, text) {
  const li = document.createElement("li")
  li.className = "comment"

  const nameEl = document.createElement("p")
  nameEl.className = "comment-name"
  nameEl.textContent = name

  const textEl = document.createElement("p")
  textEl.className = "comment-text"
  textEl.textContent = text

  li.append(nameEl, textEl)

  return li
}

function renderComments(comments) {
  const list = document.querySelector(".comments-list")
  list.innerHTML = ""

  comments.forEach(comment => {
    list.appendChild(createComment(comment.name, comment.body))
  })
}
