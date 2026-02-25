import { useState, useEffect } from "react"
import axios from "axios"
import styles from "./styles.module.css"

const BASE_URL = "https://api.thecatapi.com/v1/images/search"

export default function CatImage() {
  const [catImage, setCatImage] = useState()

  const loadImage = async () => {
    try {
      const response = await axios.get(BASE_URL)
      const { url } = response.data[0]

      setCatImage(url)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadImage()
  }, [])

  return (
    <div className={styles.container}>
      <h1>Random Cat Image</h1>
      <div>
        <img src={catImage} alt="Cat image" />
      </div>
      <button onClick={loadImage}>Load New Image</button>
    </div>
  )
}
