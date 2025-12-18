const aside = document.querySelector(".aside")
const openAsideBtn = document.querySelector(".openAsideBtn")
const closeAsideBtn = document.querySelector(".closeAsideBtn")
const overlay = document.querySelector(".overlay")

openAsideBtn.addEventListener("click", () => {
  aside.classList.remove("asideClosed")
  overlay.classList.remove("overlayHidden")
})

closeAsideBtn.addEventListener("click", closeAside)
overlay.addEventListener("click", closeAside)

function closeAside() {
  aside.classList.add("asideClosed")
  overlay.classList.add("overlayHidden")
}
