import { connect } from "react-redux"
import UserItem from "../userItem"
import styles from "./styles.module.css"

function UserList({ users, filterValue }) {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filterValue.toLowerCase()),
  )

  return (
    <ul className={styles.userList}>
      {filteredUsers.length === 0 ? (
        <li>No results</li>
      ) : (
        filteredUsers.map(user => <UserItem key={user.id} name={user.name} />)
      )}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users,
    filterValue: state.filterValue,
  }
}

export default connect(mapStateToProps)(UserList)
