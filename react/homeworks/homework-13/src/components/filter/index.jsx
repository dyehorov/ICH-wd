import { connect } from "react-redux"
import { setFilter } from "../../redux/actions"
import styles from "./styles.module.css"

function Filter({ dispatch }) {
  return (
    <form className={styles.form}>
      <input
        type="text"
        onChange={event => dispatch(setFilter(event.target.value))}
        placeholder="Enter a name..."
      />
    </form>
  )
}

export default connect()(Filter)
