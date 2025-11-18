const container = document.querySelector(".container")
const firstFiveElements = document.querySelector(".first-five")
const elementWithIdFour = document.querySelector(".id-4")
const commentaryForIdSeven = document.querySelector(".comments-for-id-7")

const url = "https://jsonplaceholder.typicode.com/posts"

firstFiveElements.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((posts) => {
      const list = document.createElement("ol")
      posts.forEach((item, index) => {
        if (index < 2) {
          const listItem = document.createElement("li")
          console.log(item)
          listItem.innerHTML = `<p>${item.id} title: ${item.title}</p>`
          list.appendChild(listItem)
        }
      })

      container.appendChild(list)
    })
})
