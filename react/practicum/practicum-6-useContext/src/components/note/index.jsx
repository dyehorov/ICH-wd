import styles from "./styles.module.css"
import { useContext } from "react"
import TodoContext from "../../context/todoContext"

export default function Note({ text, id, completed }) {
  const { toggleComplete, deleteNote } = useContext(TodoContext)

  return (
    <li className={styles.listItem}>
      <input
        type="checkbox"
        name="checkbox"
        id={`checkbox-${id}`}
        checked={completed}
        onChange={() => toggleComplete(id)}
      />
      <p className={completed ? styles.completedNote : styles.incompleteNote}>
        {text}
      </p>

      <button className={styles.button} onClick={() => deleteNote(id)}>
        <i className="fa-solid fa-xmark fa-xl"></i>
      </button>
    </li>
  )
}
