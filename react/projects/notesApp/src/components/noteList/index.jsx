import styles from "./styles.module.css"
import { connect } from "react-redux"
import NoteItem from "../noteItem"

function NoteList({ todos }) {
  return (
    <ul className={styles.noteList}>
      {todos.length === 0 ? (
        <li>No notes, add one.</li>
      ) : (
        todos.map(todo => <NoteItem key={todo.id} todo={todo} />)
      )}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.data,
  }
}

export default connect(mapStateToProps)(NoteList)
