import "./App.css"
import Main from "./components/main"
import Header from "./components/header"

export default function App() {
  return (
    <div style={{ minWidth: "540px", maxWidth: "100%" }}>
      <Header />
      <Main />
    </div>
  )
}
