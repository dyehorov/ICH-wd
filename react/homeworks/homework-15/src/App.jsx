import { useCallback, useMemo, useState } from "react"
import "./App.css"
import Filter from "./components/filter"
import UserList from "./components/userList"

const userList = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Brown" },
  { id: 4, name: "David Wilson" },
  { id: 5, name: "Eva Taylor" },
  { id: 6, name: "Frank Miller" },
  { id: 7, name: "George Davis" },
  { id: 8, name: "Hannah Moore" },
  { id: 9, name: "Ivan Petrov" },
  { id: 10, name: "Jack White" },
  { id: 11, name: "Kevin Lee" },
  { id: 12, name: "Laura Clark" },
  { id: 13, name: "Michael Scott" },
  { id: 14, name: "Nina Adams" },
  { id: 15, name: "Oscar Garcia" },
]

export default function App() {
  const [filter, setFilter] = useState("")

  const filterUsers = useCallback(filterText => {
    return userList.filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase()),
    )
  }, [])

  const filteredUsers = useMemo(() => {
    return filterUsers(filter)
  }, [filter, filterUsers])

  return (
    <div className="container">
      <h1>User List</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <UserList users={filteredUsers} />
    </div>
  )
}
