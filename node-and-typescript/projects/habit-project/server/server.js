import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import habitsRouter from "./routes/habits.js"
import statsRouter from "./routes/stats.js"
import authRouter from "./routes/auth.js"

dotenv.config()

const app = express()
const dbURI = process.env.MONGO_URI || "url"
const port = process.env.PORT || 3000

app.use(express.json())

app.use("/habits", habitsRouter)
app.use("/stats", statsRouter)
app.use("/auth", authRouter)

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
