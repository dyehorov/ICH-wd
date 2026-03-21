import "./App.css"
import Filter from "./components/filter"
import UserList from "./components/userList"

export default function App() {
  return (
    <div className="container">
      <h1>User List</h1>
      <Filter />
      <UserList />
    </div>
  )
}
