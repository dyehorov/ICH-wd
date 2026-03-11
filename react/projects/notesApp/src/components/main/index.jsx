import styles from "./styles.module.css"
import NoteForm from "../noteForm"
import NoteList from "../noteList"

export default function Main() {
  return (
    <main className={styles.main}>
      <NoteForm />
      <NoteList />
    </main>
  )
}
