import styles from "./styles.module.css"
import { connect } from "react-redux"
import { deleteTodoAction, editTodoAction } from "../../redux/actions"

function NoteItem({ title, text, id, setIsNoteEditing, dispatch }) {
  return (
    <li className={styles.listItem}>
      <div className={styles.listItemContent}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className={styles.listItemActions}>
        <button onClick={() => setIsNoteEditing(true)}>Edit</button>
        <button onClick={() => dispatch(deleteTodoAction(id))}>Delete</button>
      </div>
    </li>
  )
}

export default connect()(NoteItem)
