import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export default function Users({ users }) {
  return (
    <div className={styles.container}>
      <ul>
        <h2>Users</h2>
        {users.length !== 0 &&
          users.map(user => (
            <li key={user.id}>
              <p>
                {user.name} <span>id: {user.id}</span>
              </p>

              <Link to={`/userProfile/${user.id}`}>
                Profile for user with id: {user.id}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
