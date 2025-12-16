const root = document.querySelector("#root")
let sliderIndex = 0
const images = [
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
]
const frame = document.createElement("div")
const cards = document.createElement("div")
const triggers = document.createElement("div")
const leftButton = document.createElement("button")
const rightButton = document.createElement("button")
const rounds = document.createElement("div")

triggers.append(leftButton, rightButton)
frame.append(cards, triggers, rounds)
root.append(frame)

frame.classList.add("frame")
cards.classList.add("cards")
triggers.classList.add("triggers")
rounds.classList.add("rounds")

leftButton.textContent = "<"
rightButton.textContent = ">"

images.forEach((image, index) => {
  const card = document.createElement("div")
  card.classList.add("card")
  card.style.backgroundImage = `url("${image}")`
  cards.appendChild(card)

  const button = document.createElement("button")
  rounds.appendChild(button)

  if (index === 0) {
    button.classList.add("active")
  }

  button.addEventListener("click", () => {
    sliderIndex = index
    cards.style.left = `${-500 * sliderIndex}px`

    colorButton(sliderIndex)
  })
})

rightButton.addEventListener("click", () => {
  if (sliderIndex === images.length - 1) return

  sliderIndex++
  cards.style.left = `${-500 * sliderIndex}px`

  colorButton(sliderIndex)
})

leftButton.addEventListener("click", () => {
  if (sliderIndex === 0) return

  sliderIndex--
  cards.style.left = `${-500 * sliderIndex}px`

  colorButton(sliderIndex)
})

function colorButton(sliderIndex) {
  const allButtons = document.querySelectorAll(".rounds > button")

  allButtons.forEach(button => button.classList.remove("active"))

  allButtons[sliderIndex].classList.add("active")
}
