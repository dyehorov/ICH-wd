import styles from "./styles.module.css"
import { connect } from "react-redux"
import ReaderItem from "../readerItem"

function ReaderList({ readers }) {
  return (
    <ul className={styles.noteList}>
      {readers.length === 0 ? (
        <li>No readers, add one.</li>
      ) : (
        readers.map(reader => <ReaderItem key={reader.id} reader={reader} />)
      )}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    readers: state.readers,
  }
}

export default connect(mapStateToProps)(ReaderList)
