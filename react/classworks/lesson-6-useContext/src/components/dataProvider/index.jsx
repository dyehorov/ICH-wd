import { useState, useEffect } from "react"
import axios from "axios"
import DataContext from "../../context/dataContext"

export default function DataProvider({ children }) {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      )

      setData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}
