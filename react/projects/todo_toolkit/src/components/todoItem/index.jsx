import styles from "./styles.module.css"
import { useDispatch } from "react-redux"
import { toggleCompleted, deleteTodo } from "../../redux/slices/todosSlice"

function TodoItem({ todo }) {
  const dispatch = useDispatch()

  const { id, text, completed } = todo

  return (
    <li className={styles.listItem}>
      <p className={completed ? styles.todoCompleted : styles.todo}>{text}</p>

      <div className={styles.listItemActions}>
        <button onClick={() => dispatch(toggleCompleted(id))}>
          {completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </li>
  )
}

export default TodoItem
