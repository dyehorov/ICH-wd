import "./App.css"
import UserForm from "./components/userForm"
import PostForm from "./components/postForm"
import axios from "axios"
import { useState, useEffect } from "react"

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get("http://127.0.0.1:3333/users")

        setUsers(response.data)
      } catch (error) {}
    }

    getUsers()
  }, [])

  return (
    <div className="container">
      <div className="forms">
        <UserForm />
        <PostForm />
      </div>
      <div className="usersList">
        <ul className="userList">
          {users &&
            users.map(user => (
              <li className="userListItem" key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>Posts: {user.posts.length > 0 ? user.posts.length : "0"}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
