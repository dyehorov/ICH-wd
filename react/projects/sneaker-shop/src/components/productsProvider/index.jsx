import { useState, useEffect } from "react"
import ProductsContext from "../../context"
import axios from "axios"

const BASE_URL = "https://69c39e49b780a9ba03e75a72.mockapi.io"

export default function ProductsProvider({ children }) {
  const [cartData, setCartData] = useState([])
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
  const addToCart = async id => {
    const product = products.find(product => product.id === id)

    const isProductExists = cartData.some(item => item.name === product.name)

    if (isProductExists) return

    try {
      const response = await axios.post(`${BASE_URL}/cartData`, product)

      console.log(response.data)
      setCartData(prev => [...prev, response.data])
    } catch (error) {
      console.log(error)
    }
  }

  const deleteFromCart = async id => {
    try {
      await axios.delete(`${BASE_URL}/cartData/${id}`)

      fetchCartData()
    } catch (error) {
      console.log(error)
    }
  }

  const fetchCartData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/cartData`)

      setCartData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const value = { products, cartData, addToCart, deleteFromCart, fetchCartData }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
