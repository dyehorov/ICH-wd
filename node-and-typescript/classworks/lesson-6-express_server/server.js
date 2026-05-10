import express from "express"
import dotenv from "dotenv"
import connection from "./db/setup.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get("/users", (req, res) => {
  const query = "SELECT * FROM users;"

  connection.query(query, (err, results) => {
    if (err) {
      console.error(`Error while getting users: ${err.stack}`)
      res.status(500).send("Error while getting users")

      return
    }

    res.json(results)
  })
})

app.post("/users/add", (req, res) => {
  const name = String(req.query.name)
  const email = String(req.query.email)

  const insertUser = `
    INSERT INTO users_db.users (name, email) VALUES (?, ?)
  `

  connection.query(insertUser, [name, email], (err, results) => {
    if (err) {
      console.error(`Error while inserting user: ${err.stack}`)
      res.status(500).send("Error while inserting user")

      return
    }

    res.json(results)
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
