import "./App.css"
import UserForm from "./components/userForm"
import PostForm from "./components/postForm"

export default function App() {
  return (
    <div className="container">
      <UserForm />
      <PostForm />
    </div>
  )
}
