import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Contacts from "./pages/contacts"
import Nav from "./components/nav"
import NotFoundPage from "./pages/notFoundPage"
import Profile from "./pages/profile"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div>
      <button
        onClick={() =>
          navigate("/contacts", { state: { name: "Alice", age: 22 } })
        }
      >
        Go to contacts
      </button>
      <h2>Current url: {location.pathname}</h2>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
