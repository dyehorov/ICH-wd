import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Contacts from "./pages/contacts"
import Nav from "./components/nav"

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  )
}
