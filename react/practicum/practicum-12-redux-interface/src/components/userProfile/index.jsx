import styles from "./styles.module.css"
import { connect } from "react-redux"
import { logoutAction } from "../../redux/actions"

function UserProfile({ user, dispatch }) {
  return (
    <div>
      <h2>User profile</h2>
      <p>Welcome, {user}!</p>
      <button onClick={() => dispatch(logoutAction())}>Logout</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(UserProfile)
