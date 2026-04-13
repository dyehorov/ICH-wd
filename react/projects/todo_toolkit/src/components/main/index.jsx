import styles from "./styles.module.css"
import TodoForm from "../todoForm"
import TodoList from "../todoList"

export default function Main() {
  return (
    <main className={styles.main}>
      <TodoForm />
      <TodoList />
    </main>
  )
}
