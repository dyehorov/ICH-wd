import styles from "./styles.module.css"
import { useContext } from "react"
import Note from "../note"
import TodoContext from "../../context/todoContext"

export default function NoteList() {
  const { notes } = useContext(TodoContext)

  return (
    <ul className={styles.noteList}>
      {notes.length === 0 && <li>No notes, add new</li>}
      {notes.map(note => (
        <Note key={note.id} text={note.text} completed={note.completed} id={note.id} />
      ))}
    </ul>
  )
}
