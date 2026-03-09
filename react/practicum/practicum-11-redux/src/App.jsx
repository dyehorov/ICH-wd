import "./App.css"
import ProductList from "./components/productList"
import Cart from "./components/cart"

export default function App() {
  return (
    <div className="container">
      <div>
        <h2>Products</h2>
        <ProductList />
      </div>
      <div className="cartWrapper">
        <h2>Cart</h2>
        <Cart />
      </div>
    </div>
  )
}
