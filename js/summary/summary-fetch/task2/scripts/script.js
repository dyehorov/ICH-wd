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
const closeCommentModal = document.querySelector(".close-modal")
const createPostForm = document.querySelector(".create-post-form")

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

  const commentIconAndCountContainer = document.createElement("div")

  const icon = document.createElement("i")
  icon.className = "fa-regular fa-comment comment-icon"

  const commentsCountEl = document.createElement("span")
  commentsCountEl.className = "number-of-comments comment-icon"
  commentsCountEl.textContent = commentsCount

  commentIconAndCountContainer.append(icon, commentsCountEl)

  li.append(authorEl, titleEl, bodyEl, commentIconAndCountContainer)

  return li
}

function getPosts() {
  return fetch(`${BASE_URL}/posts`).then(response => response.json())
}

function getUsers() {
  return fetch(`${BASE_URL}/users`).then(response => response.json())
}

function getComments() {
  return fetch(`${BASE_URL}/comments`).then(response => response.json())
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

      const commentCount = event.target.parentElement.children[1].textContent

      if (Number(commentCount) === 0) return

      commentsModalWindow.classList.remove("hidden")
      closeCommentModal.classList.remove("hidden")

      const targetPost = event.target.parentElement.parentElement.dataset.id

      renderComments(commentsByPostId[targetPost])
    })

    closeCommentModal.addEventListener("click", () => {
      commentsModalWindow.classList.add("hidden")
      closeCommentModal.classList.add("hidden")
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
    createPostForm.addEventListener("submit", event => {
      event.preventDefault()

      const title = event.target["postTitle"].value
      const body = event.target["postText"].value

      if (title.trim() === "" || body.trim() === "") return

      posts.unshift({
        userId: 1,
        id: posts.length + 1,
        title: title,
        body: body,
      })

      postsList.prepend(
        createPostCard("Leanne Graham", posts.length + 1, title, body, 0)
      )

      console.log(posts)

      createPostForm.reset()
    })

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

  if (!comments) return

  comments.forEach(comment => {
    list.appendChild(createComment(comment.name, comment.body))
  })
}
