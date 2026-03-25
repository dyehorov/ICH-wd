import { useState, useEffect } from "react"
import ProductsContext from "../../context"
import axios from "axios"

const BASE_URL = "https://69c39e49b780a9ba03e75a72.mockapi.io"

export default function ProductsProvider({ children }) {
  const [cartData, setCartData] = useState()
  const [products, setProducts] = useState([])

  // api /productsData
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/productsData`)

      setProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  // api /cartData
  const addToCart = async () => {
    try {
      const response = await axios.put(`${BASE_URL}/cartData`)

      setCartData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteFromCart = async () => {}

  const fetchCartData = async () => {}

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}
