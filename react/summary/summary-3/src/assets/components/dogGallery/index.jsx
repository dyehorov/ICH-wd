import styles from "./styles.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
import DogImage from "../dogImage"

const BASE_URL = "https://dog.ceo/api/breeds/image/random"

const itemSizes = [
  "2em",
  "3em",
  "1.6em",
  "4em",
  "3.2em",
  "3em",
  "4.5em",
  "1em",
  "3.5em",
  "2.8em",
]
const items = document.querySelectorAll(".item")
for (let i = 0; i < items.length; i++) {
  items[i].style.blockSize = itemSizes[i]
}

export default function DogGallery() {
  const [dogList, setDogList] = useState([])
  const [numberOfDogs, setNumberOfDogs] = useState(3)

  async function onWindowLoad(numberOfDogs = 3) {
    const fetchArray = []

    for (let i = 0; i < numberOfDogs; i++) {
      fetchArray.push(axios.get(BASE_URL))
    }

    const response = await Promise.all(fetchArray)

    const responseArray = []

    response.forEach(item => responseArray.push(item.data.message))

    setDogList(responseArray)
  }

  const getData = async () => {
    try {
      const response = await axios.get(BASE_URL)

      return response.data.message
    } catch (error) {
      console.log(error)
    }
  }

  const getDogImage = async () => {
    const data = await getData()

    setDogList(prev => [...prev, data])
  }

  useEffect(() => {
    onWindowLoad()
  }, [])

  useEffect(() => {
    if (numberOfDogs === 3) return

    getDogImage()
  }, [numberOfDogs])

  return (
    <div>
      <button onClick={() => setNumberOfDogs(prev => prev + 1)}>
        Add a dog
      </button>
      <button onClick={() => onWindowLoad(numberOfDogs)}>Update all</button>
      <button
        onClick={() => {
          onWindowLoad()
          setNumberOfDogs(3)
        }}
      >
        Reset
      </button>
      <span>Loaded dogs: {numberOfDogs}</span>
      <ul className={styles.dogList}>
        {dogList.map(item => (
          <DogImage key={Math.random()} image={item} />
        ))}
      </ul>
    </div>
  )
}
