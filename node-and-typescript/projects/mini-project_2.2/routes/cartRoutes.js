import express from "express"
import Product from "../models/Product.js"

const router = express.Router()

router.get("/cart", async (req, res) => {
  try {
    const data = await Product.find()

    res.status(200).json({ success: true, data })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

router.post("/cart", async (req, res) => {
  try {
    const { name, quantity, price } = req.body

    const newProduct = { name, quantity, price }

    await Product.create(newProduct)

    res.status(201).json({
      success: true,
      message: "Product successfully created",
      data: newProduct,
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({ success: false, message: error.message })
  }
})

router.put("/cart/:id", async (req, res) => {
  try {
    const id = req.params.id

    const { name, quantity, price } = req.body

    if (!name || !quantity || !price)
      return res.status(400).json({
        success: false,
        message: "Name, quantity and price are required",
      })

    const updatedProduct = {
      name,
      quantity,
      price,
    }

    const data = await Product.findByIdAndUpdate(id, updatedProduct, {
      returnDocument: "after",
      runValidators: true,
    })

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      })
    }

    res.status(201).json({
      success: true,
      message: "Product successfully updated",
      data,
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({ success: false, message: error.message })
  }
})

router.delete("/cart/:id", async (req, res) => {
  try {
    const id = req.params.id

    const data = await Product.findByIdAndDelete(id)

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Product successfully deleted",
      data,
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({ success: false, message: error.message })
  }
})

export default router
