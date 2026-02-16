import TodoContext from "../../context/todoContext"
import { useState } from "react"

export default function TodoProvider({ children }) {
  const [notes, setNotes] = useState([])

  function setNoteAndUpdateLocalStorage(updatedNotes) {
    setNotes(updatedNotes)
    localStorage.setItem("notes", JSON.stringify(updatedNotes))
  }

  function addNote(text) {
    const newNotes = [
      ...notes,
      { id: crypto.randomUUID(), text: text.trim(), completed: false },
    ]

    setNoteAndUpdateLocalStorage(newNotes)
  }

  function toggleComplete(id) {
    const updatedNotes = notes.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }

      return item
    })

    setNoteAndUpdateLocalStorage(updatedNotes)
  }

  function deleteNote(id) {
    const newNotes = notes.filter(item => item.id !== id)

    setNoteAndUpdateLocalStorage(newNotes)
  }

  const value = { notes, addNote, toggleComplete, deleteNote }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
