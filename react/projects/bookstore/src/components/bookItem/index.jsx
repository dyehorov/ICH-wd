import styles from "./styles.module.css"
import { connect } from "react-redux"
import {
  bookRemoveAction,
  setEditingBookAction,
  bookToggleAvailabilityAction,
} from "../../redux/actions"

function BookItem({ book, dispatch }) {
  const { id, title, author, year, isAvailable } = book

  return (
    <li className={styles.listItem}>
      <div className={styles.listItemContent}>
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Year: {year}</p>
        <p>
          Availability:{" "}
          <span
            onClick={() => dispatch(bookToggleAvailabilityAction(id))}
            className={
              isAvailable ? styles.availableBook : styles.notAvailableBook
            }
          >
            {isAvailable ? "Available" : "Not Available"}
          </span>
        </p>
      </div>
      <div className={styles.listItemActions}>
        <button onClick={() => dispatch(setEditingBookAction(book))}>
          Edit
        </button>
        <button onClick={() => dispatch(bookRemoveAction(id))}>Delete</button>
      </div>
    </li>
  )
}

export default connect()(BookItem)
