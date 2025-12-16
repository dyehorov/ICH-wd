const images = [
  "https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_v_lesnoj_tishi_ki200106.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
  "https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_rannej_vesnoj_v_lesu_ki200102.jpg",
]

const root = document.querySelector("#root")

const frame = document.createElement("div")
const mainCard = document.createElement("div")
const cards = document.createElement("div")

frame.append(mainCard, cards)
root.append(frame)

frame.classList.add("frame")
mainCard.classList.add("mainCard")
cards.classList.add("cards")

images.forEach((image, index) => {
  const card = document.createElement("img")
  card.className = index === 0 ? "card active" : "card"
  card.setAttribute("src", `${image}`)

  if (index === 0) {
    mainCard.style.backgroundImage = `url("${image}")`
  }

  cards.appendChild(card)
})

cards.addEventListener("click", event => {
  if (!event.target.closest(".card")) return

  document
    .querySelectorAll(".card")
    .forEach(card => card.classList.remove("active"))

  event.target.classList.add("active")

  mainCard.style.backgroundImage = `url("${event.target.src}")`
})
