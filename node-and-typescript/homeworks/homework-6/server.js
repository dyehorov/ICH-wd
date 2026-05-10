import express from "express"
import dotenv from "dotenv"
import connection from "./db/setup.js"

dotenv.config()

const app = express()
const port = process.env.PORT ?? 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("Hello, World!")
})

app.post("/submit", (req, res, next) => {
  const { username, email } = req.body

  if (!username) {
    const error = new Error("Username was not given")
    error.status = 400
    next(error)

    return
  }

  if (!email) {
    const error = new Error("Email was not given")
    error.status = 400
    next(error)

    return
  }

  res.send(`Username: ${username}, email: ${email}`)
})

app.get("/products", (req, res) => {
  const query = "SELECT * FROM product_db.products;"

  connection.query(query, (err, results) => {
    if (err) {
      console.error(`Error while getting products: ${err.stack}`)
      res.status(500).send("Error while getting products")

      return
    }

    res.json(results)
  })
})

app.post("/product/add", (req, res) => {
  const name = req.query.name
  const price = req.query.price

  const insertProduct = `
    INSERT INTO product_db.products (name, price) VALUES (?, ?)
  `

  connection.query(insertProduct, [name, price], (err, results) => {
    if (err) {
      console.error(`Error while inserting product: ${err.stack}`)
      res.status(500).send("Error while inserting product")

      return
    }

    res.json({ results, message: "Success" })

    console.log("Product was successfully added to database")
  })
})

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  })
})

app.use((error, req, res, next) => {
  console.error(error.stack)

  res.status(error.status || 500).json({ message: error.message })
})

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
