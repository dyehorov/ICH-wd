import express from "express"
import Product from "../models/Product.js"

const router = express.Router()

router.post("/cart", async (req, res) => {
  try {
    const { name, quantity, price } = req.body

    const newProduct = { name, quantity, price }

    await Product.create(newProduct)

    res
      .status(201)
      .json({ success: true, message: "Product successfully created" })
  } catch (error) {
    console.log(error)

    res.status(500).json({ success: false, message: error.message })
  }
})

export default router
