import express from "express"
import dotenv from "dotenv"
import balanceRouter from "./routes/balanceRoutes.js"
import connectDB from "./db/index.js"

dotenv.config()

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use("/balance", balanceRouter)

app.get("/", (req, res) => {
  res.status(200).send("This is mini project 3.1")
})

app.listen(port, () => {
  connectDB()

  console.log(`Server is running on http://127.0.0.1:${port}`)
})
