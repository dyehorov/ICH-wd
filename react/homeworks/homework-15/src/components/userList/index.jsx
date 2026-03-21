import { memo } from "react"
import UserItem from "../userItem"
import styles from "./styles.module.css"

function UserList({ users }) {
  return (
    <ul className={styles.userList}>
      {users.length === 0 ? (
        <li>No results</li>
      ) : (
        users.map(user => <UserItem key={user.id} name={user.name} />)
      )}
    </ul>
  )
}

export default memo(UserList)
