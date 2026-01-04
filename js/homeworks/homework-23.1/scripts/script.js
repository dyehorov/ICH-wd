const aside = document.querySelector(".aside")
const openAsideBtn = document.querySelector(".openAsideBtn")
const closeAsideBtn = document.querySelector(".closeAsideBtn")
const overlay = document.querySelector(".overlay")
const navList = document.querySelector(".nav-list")
const sublists = document.querySelectorAll(".sublist")

const sublistData = [
  { 1: "Shop", 2: "Contacts", 3: "About Us" },
  { 1: "Services", 2: "Pricing", 3: "Promotions" },
  { 1: "Blog", 2: "News", 3: "Reviews" },
  { 1: "FAQ", 2: "Support", 3: "Privacy Policy" },
]

openAsideBtn.addEventListener("click", () => {
  aside.classList.remove("asideClosed")
  overlay.classList.remove("overlayHidden")
})

closeAsideBtn.addEventListener("click", closeAside)
overlay.addEventListener("click", closeAside)

navList.addEventListener("click", event => {
  event.preventDefault()

  const item = event.target.closest(".nav-list__item")
  if (!item) return

  const currentSublist = item.querySelector(".sublist")
  const index = Number(item.dataset.listitem) - 1
  const elements = sublistData[index]

  sublists.forEach(sub => {
    if (sub !== currentSublist) {
      sub.classList.remove("sublist--open")
      sub.innerHTML = ""
    }
  })

  if (currentSublist.classList.contains("sublist--open")) {
    currentSublist.classList.remove("sublist--open")
    currentSublist.innerHTML = ""

    return
  }

  renderElementsToSublist(elements, currentSublist, item.dataset.listitem)
  currentSublist.classList.add("sublist--open")
})

function closeAside() {
  aside.classList.add("asideClosed")
  overlay.classList.add("overlayHidden")
}

function createSublistItem(listNumber, elementNumber, text) {
  const li = document.createElement("li")
  li.className = "sublist-item"
  li.innerHTML = `<a href="#">${listNumber}.${elementNumber} ${text}</a>`

  return li
}

function renderElementsToSublist(elements, parent, listNumber) {
  for (const key in elements) {
    parent.appendChild(createSublistItem(listNumber, key, elements[key]))
  }
}
