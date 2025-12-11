// 1. validation for switchers < >
// 2. localStorage
// 3. loading
// 4**. dynamic search {title, body}

const BASE_URL = "https://jsonplaceholder.typicode.com"
const postContainer = document.querySelector(".post")
const previousPostBtn = document.querySelector(".previous-post-btn")
const nextPostBtn = document.querySelector(".next-post-btn")
const searchResultsContainer = document.querySelector(".search-results")
const searchPostInput = document.querySelector("#search-input")
const closeSearchResults = document.querySelector(".close-search-results")
let postNumber = JSON.parse(localStorage.getItem("postNumber")) || 1
let totalNumberOfPosts = null

window.addEventListener("DOMContentLoaded", async () => {
  const posts = await getAllPosts()
  totalNumberOfPosts = posts.length

  await renderPost(postNumber)

  nextPostBtn.addEventListener("click", async () => {
    if (postNumber >= totalNumberOfPosts) return
    postNumber++
    localStorage.setItem("postNumber", JSON.stringify(postNumber))
    await renderPost(postNumber)
  })

  previousPostBtn.addEventListener("click", async () => {
    if (postNumber <= 1) return
    postNumber--
    localStorage.setItem("postNumber", JSON.stringify(postNumber))
    await renderPost(postNumber)
  })

  searchPostInput.addEventListener("input", event => {
    const searchInput = event.target.value.trim()

    if (searchInput.length < 2) {
      searchResultsContainer.innerHTML = "No posts found"
      return
    }

    searchResultsContainer.innerHTML = ""

    listPosts(filterPostsByInput(posts, searchInput))

    if (searchResultsContainer.children.length === 0) {
      searchResultsContainer.innerHTML = "No tasks found"
    }
  })
})

async function getPost(id) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`)

    if (!response.ok) {
      throw new Error("Failed to fetch post")
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

async function getAllPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`)

    if (!response.ok) {
      throw new Error("Failed to fetch post")
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)

    return 0
  }
}

function createPost(title, body) {
  const postInfo = document.createElement("div")

  const postTitle = document.createElement("h1")
  postTitle.className = "post-title"
  postTitle.textContent = title

  const postText = document.createElement("p")
  postText.className = "post-text"
  postText.textContent = body

  postInfo.append(postTitle, postText)

  return postInfo
}

async function renderPost(id) {
  showLoader()

  const { title, body } = await getPost(id)

  postContainer.innerHTML = ""
  postContainer.appendChild(createPost(title, body))
  document.querySelector(".post-number").textContent = id

  hideLoader()
}

function showLoader() {
  postContainer.innerHTML = `<span class="loader"></span>`
}

function hideLoader() {
  const loader = postContainer.querySelector(".loader")
  if (loader) loader.remove()
}

function listPosts(posts) {
  posts.forEach(({ title, body }) => {
    searchResultsContainer.appendChild(createPost(title, body))
  })
}

function filterPostsByInput(list, searchInput) {
  return list.filter(({ title, body }) => {
    return (
      title.toLowerCase().includes(searchInput.toLowerCase()) ||
      body.toLowerCase().includes(searchInput.toLowerCase())
    )
  })
}

searchPostInput.addEventListener("focus", () => {
  searchResultsContainer.classList.remove("hidden")
  closeSearchResults.classList.remove("hidden")
})

closeSearchResults.addEventListener("click", () => {
  searchResultsContainer.classList.add("hidden")
  closeSearchResults.classList.add("hidden")
  searchPostInput.value = ""
})
