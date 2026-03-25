import "./App.css"
import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/main" />
        <Route path="/cart" />
        <Route path="/contacts" />
      </Routes>
      <Footer />
    </>
  )
}
