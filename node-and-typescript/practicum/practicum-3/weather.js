import dotenv from "dotenv"
import axios from "axios"

dotenv.config()

const BASE_URL = "https://wttr.in"

const city = process.env.CITY

const getWeatherData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/${city}?format=%t`)

    console.log(`Temperature in ${city}: ${response.data}`)
  } catch (error) {
    console.log(`There was an error while getting data: ${err}`)
  }
}

getWeatherData()
