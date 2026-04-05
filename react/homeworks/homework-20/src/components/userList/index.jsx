import { useSelector } from "react-redux"

export default function UserList() {
  const { users } = useSelector(state => state.users)

  return (
    <>
      <h1>User List</h1>
      <ul style={{ padding: "20px" }}>
        {users.length &&
          users.map(user => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
      </ul>
    </>
  )
}
