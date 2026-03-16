import styles from "./styles.module.css"
import { connect } from "react-redux"
import { useState } from "react"
import {
  bookRemoveAction,
  setEditingBookAction,
  bookToggleAvailabilityAction,
} from "../../redux/actions"

function BookItem({ book, dispatch }) {
  const { id, title, author, year, isAvailable } = book
  const [errorMessage, setErrorMessage] = useState("")

  const handleBookRemoval = () => {
    if (!isAvailable) {
      setErrorMessage("Cannot delete, the book is not available")
    }

    dispatch(bookRemoveAction(id, isAvailable))
  }

  return (
    <li className={styles.listItem}>
      <div className={styles.listItemContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.meta}>Author: {author}</p>
        <p className={styles.meta}>Year: {year}</p>
        <div className={styles.availability}>
          <span>Status:</span>
          <span
            className={`${styles.status} ${
              isAvailable ? styles.availableBook : styles.notAvailableBook
            }`}
          >
            {isAvailable ? "Available" : "Not Available"}
          </span>
        </div>
        {!isAvailable && <p>{errorMessage}</p>}
      </div>
      <div className={styles.listItemActions}>
        <button
          type="button"
          onClick={() => dispatch(setEditingBookAction(book))}
        >
          Edit
        </button>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={handleBookRemoval}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default connect()(BookItem)
