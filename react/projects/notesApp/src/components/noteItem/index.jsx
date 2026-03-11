import styles from "./styles.module.css"
import { connect } from "react-redux"
import { deleteTodoAction, setEditingNoteAction } from "../../redux/actions"

function NoteItem({ todo, dispatch }) {
  const { id, title, text } = todo

  return (
    <li className={styles.listItem}>
      <div className={styles.listItemContent}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className={styles.listItemActions}>
        <button onClick={() => dispatch(setEditingNoteAction(todo))}>Edit</button>
        <button onClick={() => dispatch(deleteTodoAction(id))}>Delete</button>
      </div>
    </li>
  )
}

export default connect()(NoteItem)
