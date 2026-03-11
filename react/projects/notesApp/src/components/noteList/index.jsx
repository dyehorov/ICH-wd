import styles from "./styles.module.css"
import { connect } from "react-redux"
import NoteItem from "../noteItem"

function NoteList({ todos }) {
  return (
    <ul className={styles.noteList}>
      {todos.length === 0 ? (
        <p>No notes, add one.</p>
      ) : (
        todos.map(todo => (
          <NoteItem
            key={todo.id}
            title={todo.title}
            text={todo.text}
            id={todo.id}
          />
        ))
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
