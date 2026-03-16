import "./App.css"
import { Route, Routes } from "react-router-dom"
import Books from "./pages/books"
import Main from "./pages/main"
import Readers from "./pages/readers"

export default function App() {
  return (
    <main className="appShell">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books" element={<Books />} />
        <Route path="/readers" element={<Readers />} />
      </Routes>
    </main>
  )
}
