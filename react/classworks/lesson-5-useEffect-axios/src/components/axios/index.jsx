import { useState, useEffect } from "react"
import axios from "axios"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export default function Axios() {
  const [users, setUsers] = useState(null)

  async function fetchUsers() {
    // axios
    //   .get(`${BASE_URL}/users`)
    //   .then(response => {
    //     console.log(response.data)
    //     setUsers(response.data)
    //   })
    //   .catch(error => console.log(error))

    try {
      const response = await axios.get(`${BASE_URL}/users`)
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      <button onClick={fetchUsers}>Fetch users</button>
      <ul>
        {users &&
          users.map(user => (
            <li key={user.id}>
              {user.name} | {user.email}
            </li>
          ))}
      </ul>
    </div>
  )
}
