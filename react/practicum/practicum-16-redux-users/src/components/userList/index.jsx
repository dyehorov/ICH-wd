import { useSelector } from "react-redux"
import UserItem from "../userItem"

export default function UserList() {
  const users = useSelector(state => state.users.users)

  return (
    <ul>
      {users.length === 0 ? (
        <li>Add users</li>
      ) : (
        users.map(user => <UserItem key={user.id} {...user} />)
      )}
    </ul>
  )
}
