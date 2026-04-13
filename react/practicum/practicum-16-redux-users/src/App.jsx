import "./App.css"

import UserForm from "./components/userForm"
import UserList from "./components/userList"

export default function App() {
  return (
    <div className="container">
      <h2>User List</h2>
      <UserList />
      <h2>Add User</h2>
      <UserForm />
    </div>
  )
}
