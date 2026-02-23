import "./App.css"
import DataProvider from "./components/dataProvider"
import Posts from "./components/posts"

function App() {
  return (
    <DataProvider>
      <Posts />
    </DataProvider>
  )
}

export default App
