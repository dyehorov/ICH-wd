import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()
const app = express()
const port = process.env.PORT || 3000
const dbURI = process.env.MONGODB_URI || "url"

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Server is running")
})

async function startServer() {
  try {
    await mongoose.connect(dbURI)
    console.log("Successfully connected to MongoDB!")

    app.listen(port, () => {
      console.log(`Server is running on http://127.0.0.1:${port}`)
    })
  } catch (error) {
    console.error(error.message)
  }
}

startServer()
