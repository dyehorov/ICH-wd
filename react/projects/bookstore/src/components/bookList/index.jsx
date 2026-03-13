import styles from "./styles.module.css"
import { connect } from "react-redux"
import BookItem from "../bookItem"

function BookList({ books }) {
  console.log(books)

  return (
    <ul className={styles.noteList}>
      {books.length === 0 ? (
        <li>No books, add one.</li>
      ) : (
        books.map(book => <BookItem key={book.id} book={book} />)
      )}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books,
  }
}

export default connect(mapStateToProps)(BookList)
