import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRouter from "./routes/auth.js"
import taskRouter from "./routes/task.js"
import connectDb from "./db/index.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use("/auth", authRouter)
app.use("/api", taskRouter)

app.get("/", (req, res) => {
  res.status(200).send("Mini project 4.1")
})

async function startServer() {
  await connectDb()

  app.listen(port, () => {
    console.log(`Server is runnning on http://127.0.0.1:${port}`)
  })
}

startServer()
