import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import User from "./models/User.js"
import Post from "./models/Post.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const dbURI = process.env.MONGO_URI || "url"
const port = process.env.PORT || 3000

app.post("/user", async (req, res) => {
  try {
    const { name, email, password } = req.body

    const user = await User.create(req.body)

    return res.status(201).json({ data: user })
  } catch (error) {
    return res.status(500).json({ success: false, error })
  }
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
