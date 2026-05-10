import express from "express"
import dotenv from "dotenv"
import connection from "./db/setup"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
// this is the same as
// app.use((req, res, next) => {
//   const jsonPayload = JSON.parse(req.json)
//   req.body = jsonPayload

//   next()
// })

app.use(express.urlencoded({ extended: true }))

// app.get("/", (req, res) => {
//   res.send("Hello, World!")
// })

// app.get("/welcome", (req, res) => {
//   res.send("Welcome to my site!")
// })

// app.get("/users", (req, res) => {
//   res.send("List of users")
// })

// app.get("/users/:id", (req, res) => {
//   const userId = req.params.id

//   res.send(`User id: ${userId}`)
// })

// app.get("/search", (req, res) => {
//   const searchQuery = req.query.q
//   console.log(req.query)
//   res.send(`Search query: ${searchQuery}`)
// })

// app.get("/users/:id", (req, res) => {
//   const userId = req.params.id
//   const userName = req.query.name

//   res.send(`User id: ${userId}, User name: ${userName}`)
// })

// app.get("/text", (req, res) => {
//   res.send("Hello, this is a text response")
// })

// app.get("/json", (req, res) => {
//   res.json({ message: "Hello, this is a JSON response" })
// })

// app.post("/submit", (req, res) => {
//   const { username, email } = req.body

//   res.send(`Username: ${username}, email: ${email}`)
// })

// app.post("/login", (req, res) => {
//   const { email, password } = req.body

//   res.json({
//     status: "success",
//     message: "Successfull Authorization",
//     data: {
//       id: 131231213,
//       email,
//     },
//   })
// })

// app.get("/users", (req, res) => {
//   res.send("List of users")
// })

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Tom" },
// ]

// app.get("/users/:id", (req, res, next) => {
//   const userId = Number(req.params.id)
//   const user = users.find(user => user.id === userId)

//   if (!user) {
//     const error = new Error("User not found")
//     res.status(404)

//     return next(error)
//   }

//   res.json({ status: "Successfull", data: user })
// })

// app.use((error, req, res, next) => {
//   console.error(error.stack)

//   res.status(error.status || 500).json({ message: error.message })

//   // next is not required while there is no other middlewares in this code
// })

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
