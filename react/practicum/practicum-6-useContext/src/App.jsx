import "./App.css"
import NoteList from "./components/noteList"
import NoteForm from "./components/noteForm"
import TodoProvider from "./components/toDoProvider"

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1 className="title">Your Notes</h1>
        <NoteForm />
        <NoteList />
      </div>
    </TodoProvider>
  )
}

export default App
