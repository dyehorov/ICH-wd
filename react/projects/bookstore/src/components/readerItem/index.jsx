import { useState } from "react"
import {
  bookLendToReaderAction,
  bookReturnFromReaderAction,
  readerRemoveAction,
} from "../../redux/actions"
import styles from "./styles.module.css"
import { connect } from "react-redux"

function ReaderItem({ reader, books, dispatch }) {
  const { id, name, email, borrowedBooks } = reader
  const [selectedBookId, setSelectedBookId] = useState("")

  const availableBooks = books.filter(book => book.isAvailable)
  const borrowedBookItems = borrowedBooks
    .map(bookId => books.find(book => book.id === bookId))
    .filter(Boolean)

  const handleLendBook = () => {
    if (!selectedBookId) {
      return
    }

    dispatch(bookLendToReaderAction(selectedBookId, id))
    setSelectedBookId("")
  }

  return (
    <li className={styles.listItem}>
      <div className={styles.listItemContent}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.meta}>Email: {email}</p>

        <div className={styles.lendRow}>
          <select
            value={selectedBookId}
            onChange={event => setSelectedBookId(event.target.value)}
          >
            <option value="">Select available book</option>
            {availableBooks.map(book => (
              <option key={book.id} value={book.id}>
                {book.title}
              </option>
            ))}
          </select>
          <button type="button" onClick={handleLendBook}>
            Lend
          </button>
        </div>

        <div className={styles.borrowedBooks}>
          {borrowedBookItems.length === 0 ? (
            <p className={styles.meta}>No borrowed books</p>
          ) : (
            borrowedBookItems.map(book => (
              <div key={book.id} className={styles.borrowedBookItem}>
                <span>{book.title}</span>
                <button
                  type="button"
                  onClick={() => dispatch(bookReturnFromReaderAction(book.id, id))}
                >
                  Return
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <div className={styles.listItemActions}>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={() => dispatch(readerRemoveAction(id))}
          disabled={borrowedBooks.length > 0}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books,
  }
}

export default connect(mapStateToProps)(ReaderItem)
