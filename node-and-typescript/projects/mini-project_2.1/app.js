import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import Product from "./models/Product.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post("/product", async (req, res) => {
  try {
    const { name, quantity, price } = req.body

    if (!name)
      return res
        .status(400)
        .json({ success: false, message: "Name is required" })

    const newProduct = { name, quantity, price }

    await Product.create(newProduct)

    res
      .status(201)
      .json({ success: true, message: "Product successfully created" })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

app.listen(port, () => {
  connectDB()
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
