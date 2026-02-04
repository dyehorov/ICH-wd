import "./App.css"
import { useState } from "react"
import NoteForm from "./components/noteForm"
import NoteList from "./components/noteList"
import Form from "./components/form"

function App() {
  const [notes, setNotes] = useState([])
  const [color, setColor] = useState("")

  function updateColor(newColor) {
    setColor(newColor)
  }

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <Form updateColor={updateColor} />
      <NoteForm setNotes={setNotes} notes={notes} />
      <NoteList notes={notes} />
    </div>
  )
}
export default App
