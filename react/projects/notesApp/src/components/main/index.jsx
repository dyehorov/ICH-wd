import styles from "./styles.module.css"
import NoteForm from "../noteForm"
import NoteList from "../noteList"
import { useState } from "react"

export default function Main() {
  const [isNoteEditing, setIsNoteEditing] = useState(false)

  return (
    <main className={styles.main}>
      <NoteForm
        isNoteEditing={isNoteEditing}
        setIsNoteEditing={setIsNoteEditing}
      />
      <NoteList setIsNoteEditing={setIsNoteEditing} />
    </main>
  )
}
