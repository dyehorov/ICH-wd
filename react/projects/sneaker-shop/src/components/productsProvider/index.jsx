import { useState } from "react"
import ProductsContext from "../../context"
import axios from "axios"

const BASE_URL = "https://69c39e49b780a9ba03e75a72.mockapi.io"

export default function ProductProvider({ children }) {
  const [cartData, setCartData] = useState()
  const [products, setProducts] = useState()

  // api /productsData
  const fetchProducts = async () => {}

  // api /cartData
  const addToCart = async () => {}

  const deleteFromCart = async () => {}

  const fetchCartData = async () => {}

  return (
    <ProductsContext.Provider value={{}}>{children}</ProductsContext.Provider>
  )
}
