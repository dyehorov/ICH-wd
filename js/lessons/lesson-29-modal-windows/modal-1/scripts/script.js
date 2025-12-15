const openModalBtn = document.querySelector(".openModalBtn")
const modal = document.querySelector(".modal")
const modalBody = document.querySelector(".modalBody")
const closeModalButton = document.querySelector(".closeModalBody")

const toggleModalWindow = () => {
  modal.classList.toggle("modalHidden")
}

openModalBtn.addEventListener("click", toggleModalWindow)
modal.addEventListener("click", toggleModalWindow)
modalBody.addEventListener("click", event => event.stopPropagation())

// close via ESC
document.addEventListener("keyup", event => {
  if (event.key === "Escape") {
    modal.classList.add("modalHidden")
  }
})

// close via btn (close icon)
closeModalButton.addEventListener("click", toggleModalWindow)
