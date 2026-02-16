import styles from "./styles.module.css"
import { useContext, useState } from "react"
import TodoContext from "../../context/todoContext"

export default function NoteForm() {
  const [inputText, setInputText] = useState("")
  const { addNote } = useContext(TodoContext)

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedText = inputText.trim()
    if (trimmedText.length === 0) return

    addNote(trimmedText)
    setInputText("")
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        value={inputText}
        type="text"
        name="inputnote"
        placeholder="Add new task"
        id="inputnote"
        onChange={event => setInputText(event.target.value)}
      />
      <button type="submit">
        <i className="fa-solid fa-plus fa-xl"></i>
      </button>
    </form>
  )
}
