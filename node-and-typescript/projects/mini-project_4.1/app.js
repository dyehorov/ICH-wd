import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRouter from "./routes/auth.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const uri = process.env.MONGO_URI || "uri"

app.use(express.json())
app.use("/auth", authRouter)

app.get("/", (req, res) => {
  res.status(200).send("Mini project 4.1")
})

async function connect() {
  try {
    await mongoose.connect(uri)
    console.log("MongoDB Connected!")

    app.listen(port, () => {
      console.log(`Server is runnning on http://127.0.0.1:${port}`)
    })
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message)
  }
}

connect()
