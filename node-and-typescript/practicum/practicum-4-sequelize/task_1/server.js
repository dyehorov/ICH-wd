import express from "express"
import dotenv from "dotenv"
import sequelize from "./config/db.js"

dotenv.config()

const app = express()
const port = process.env.PORT ?? 3000

app.get("/", (req, res) => {
  res.send("This is practicum task 1!")
})

app.listen(port, async () => {
  try {
    await sequelize.authenticate()
    console.log("Connection to the database established!")

    console.log(`Server is running on http://127.0.0.1:${port}`)
  } catch (error) {
    console.error(`Unable to connect to the database: ${error}`)
  }
})
