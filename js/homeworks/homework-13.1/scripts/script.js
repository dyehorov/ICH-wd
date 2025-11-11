const form = document.querySelector("#form")
const notesContainer = document.querySelector(".notesContainer")
const notes = JSON.parse(localStorage.getItem("notes")) || []

function renderNote(text) {
  const note = document.createElement("div")
  note.classList.add("note")

  const noteText = document.createElement("p")
  noteText.classList.add("noteText")
  noteText.textContent = text

  note.appendChild(noteText)
  notesContainer.appendChild(note)
}

function renderNotes(list) {
  list.forEach(({ text }) => {
    renderNote(text)
  })
}

window.addEventListener("DOMContentLoaded", () => {
  if (notes.length !== 0) {
    renderNotes(notes)
  } else {
    notesContainer.innerHTML = "<p>Add a note</p>"
  }
})

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const inputValue = event.target.elements["note"]

  if (inputValue.value.trim()) {
    if (notesContainer.firstChild.nodeName === "P") {
      notesContainer.removeChild(notesContainer.firstChild)
    }

    const note = {
      text: inputValue.value,
    }

    notes.push(note)
    localStorage.setItem("notes", JSON.stringify(notes))

    renderNote(inputValue.value)

    inputValue.value = ""
  }
})
