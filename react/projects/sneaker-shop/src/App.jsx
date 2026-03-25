import "./App.css"
import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import MainPage from "./pages/mainPage"
import ProductsProvider from "./components/productsProvider"

export default function App() {
  return (
    <div className="layout">
      <Header />

      <main className="main">
        <ProductsProvider>
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/cart" />
            <Route path="/contacts" />
          </Routes>
        </ProductsProvider>
      </main>

      <Footer />
    </div>
  )
}
