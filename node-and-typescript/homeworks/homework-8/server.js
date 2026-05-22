import express from "express"
import dotenv from "dotenv"
import { Book } from "./models/book.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get("/books", async (req, res) => {
  try {
    const books = await Book.findAll()

    if (books.length === 0) {
      return res.status(204)
    }

    res.status(200).json({ success: true, data: books })
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" })
  }
})

app.post("/books", async (req, res) => {
  try {
    const { title, author, year } = req.body

    const bookExists = await Book.findOne({ where: { title } })

    if (bookExists) {
      return res.status(409).json({
        success: false,
        message: "Book with such title already exists",
      })
    }

    const newBook = await Book.create({ title, author, year })

    res.status(201).json({
      success: true,
      data: newBook,
      message: `Book "${title} was added successfully"`,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

app.put("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id
    const { title, author, year } = req.body

    const [updatedRowsCount] = await Book.update(
      {
        title,
        author,
        year,
      },
      { where: { id: bookId } },
    )

    if (updatedRowsCount === 0) {
      return res.status(409).json({
        success: false,
        message: "Book not found",
      })
    }

    res.status(201).json({
      success: true,
      message: `Book with id ${bookId} was updated successfully`,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

app.delete("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id

    const updatedRowsCount = await Book.destroy({ where: { id: bookId } })

    if (updatedRowsCount === 0) {
      return res.status(409).json({
        success: false,
        message: "Book not found",
      })
    }

    res.status(201).json({
      success: true,
      message: `Book with id ${bookId} was deleted successfully`,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
