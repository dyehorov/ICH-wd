import { useContext } from "react"
import UserContext from "../../context/userContext"

export default function UserProfile() {
  const { login, email, logoutUser } = useContext(UserContext)

  return (
    <div>
      <h1>User profile</h1>
      <p>Login: {login}</p>
      <p>Email: {email}</p>
      <button onClick={logoutUser}>Logout</button>
    </div>
  )
}
