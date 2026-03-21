import { connect } from "react-redux"
import styles from "./styles.module.css"

function User({ name, status }) {
  return (
    <>
      <h2 className={styles.userTitle}>User Information</h2>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
    </>
  )
}

const mapStateToProps = state => {
  return {
    name: state.name,
    status: state.status,
  }
}

export default connect(mapStateToProps)(User)
