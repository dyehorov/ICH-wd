import express from "express"
import dotenv from "dotenv"
import { ObjectId } from "mongodb"
import { connectDB, getDb } from "./db/index.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3333

app.use(express.json())

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://127.0.0.1:${port}`)
    })
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB and start server", err)
  })

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" })
})

app.post("/products", async (req, res) => {
  try {
    const { name, price, description } = req.body
    const db = getDb()

    const product = {
      name,
      price,
      description,
    }

    const result = await db.collection("products").insertOne(product)

    res.status(201).json({
      message: "Product created",
      id: result.insertedId,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get("/products", async (req, res) => {
  try {
    const db = getDb()

    const products = await db.collection("products").find().toArray()

    res.json(products)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id
    const db = getDb()

    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) })

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      })
    }

    res.json(product)
  } catch (error) {
    res.status(400).json({
      error: "Invalid product ID",
    })
  }
})

app.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id
    const db = getDb()

    const result = await db.collection("products").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          description: req.body.description,
        },
      },
    )

    if (result.matchedCount === 0) {
      return res.status(404).json({
        message: "Product not found",
      })
    }

    const updatedProduct = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) })

    res.json(updatedProduct)
  } catch (error) {
    res.status(400).json({
      error: "Invalid product ID",
    })
  }
})

app.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id
    const db = getDb()

    const result = await db.collection("products").deleteOne({
      _id: new ObjectId(id),
    })

    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Product not found",
      })
    }

    res.json({
      message: "Product deleted successfully",
    })
  } catch (error) {
    res.status(400).json({
      error: "Invalid product ID",
    })
  }
})
