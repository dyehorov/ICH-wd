import { useParams } from "react-router-dom"

export default function UserProfile({ users }) {
  const { userId } = useParams()

  const user = users.find(user => user.id === Number(userId))

  if (!user) return <h2>User not found</h2>

  return (
    <>
      <h2>User profile:</h2>
      <p>Name: {user.name}</p>
      <p>ID: {userId}</p>
      <p>Email: {user.email}</p>
      <p>
        Address: {user.address.street}, {user.address.city},{" "}
        {user.address.country}
      </p>
    </>
  )
}
