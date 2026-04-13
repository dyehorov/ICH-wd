import styles from "./styles.module.css"
import TodoItem from "../todoItem"
import { useSelector } from "react-redux"

function TodoList() {
  const { todos } = useSelector(state => state.todos)

  return (
    <ul className={styles.noteList}>
      {todos.length === 0 ? (
        <li>No todos, add one.</li>
      ) : (
        todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  )
}

export default TodoList
