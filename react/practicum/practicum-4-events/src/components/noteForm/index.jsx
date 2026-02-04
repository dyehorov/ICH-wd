import { useState } from "react"

function NoteForm({ setNotes, notes }) {
  const [noteTitle, setNoteTitle] = useState("")
  function handleSubmit(event) {
    event.preventDefault()
    const newNote = {
      id: Math.random(),
      title: noteTitle,
      completed: false,
    }
    setNotes([...notes, newNote])
    setNoteTitle("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={noteTitle}
        onChange={event => setNoteTitle(event.target.value)}
      />
      <button type="submit">Add note</button>
    </form>
  )
}
export default NoteForm
