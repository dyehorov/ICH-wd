const KEY = "123116da"
const openFullDescriptionButton = document.querySelector(".movie-button")
const movieFullDescriptionContainer = document.querySelector(
  ".movie-full-description"
)
const closeFullDescriptionModal = document.querySelector(".close-modal-button")

openFullDescriptionButton.addEventListener("click", () => {
  movieFullDescriptionContainer.classList.remove("modal-hidden")
})

closeFullDescriptionModal.addEventListener("click", () => {
  movieFullDescriptionContainer.classList.add("modal-hidden")
})
