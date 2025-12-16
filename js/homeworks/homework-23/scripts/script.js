const items = [
  { id: 1, title: "Buy groceries" },
  { id: 2, title: "Finish homework" },
  { id: 3, title: "Go to the gym" },
  { id: 4, title: "Read a book" },
  { id: 5, title: "Call a friend" },
]

const root = document.querySelector("#root")
const cards = document.createElement("ul")
cards.className = "cards"

items.forEach(({ id, title }) => cards.appendChild(createListItems(id, title)))

root.append(cards)

cards.addEventListener("click", event => {
  if (!event.target.closest(".deleteItem")) return

  event.target.closest("li").remove()
})

function createListItems(id, title) {
  const li = document.createElement("li")
  li.className = "list-item"
  li.id = id

  const p = document.createElement("p")
  p.textContent = title

  const button = document.createElement("button")
  button.textContent = "X"
  button.className = "deleteItem"

  li.append(p, button)

  return li
}
