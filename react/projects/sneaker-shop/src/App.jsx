import "./App.css"
import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import MainPage from "./pages/mainPage"
import ProductsProvider from "./components/productsProvider"
import CartPage from "./pages/cartPage"
import ContactsPage from "./pages/contactsPage"

export default function App() {
  return (
    <div className="layout">
      <Header />

      <main className="main">
        <ProductsProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </ProductsProvider>
      </main>

      <Footer />
    </div>
  )
}
