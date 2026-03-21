import "./App.css"
import UserForm from "./components/userForm"
import User from "./components/user"

export default function App() {
  return (
    <div className="container">
      <h1>User Profile</h1>
      <User />
      <UserForm />
    </div>
  )
}
