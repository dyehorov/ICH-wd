import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import Product from "./models/Product.js"
import cartRouter from "./routes/cartRoutes.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use("/api", cartRouter)

app.listen(port, () => {
  connectDB()
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
