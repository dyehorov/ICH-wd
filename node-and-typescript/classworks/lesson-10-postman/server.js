import express from "express"

const app = express()

app.use(express.json())

let users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
]

app.get("/users", (req, res) => {
  res.json(users)
})

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) return res.status(404).json({ message: "User not found" })

  res.json(user)
})

app.post("/users", (req, res) => {
  if (!req.body.name || !req.body.email)
    return res.status(404).json({ message: "Name or email cannot be empty" })

  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  }

  users.push(newUser)

  res.status(201).json(newUser)
})

app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) return res.status(404).json({ message: "User not found" })

  user.name = req.body.name || user.name
  user.email = req.body.email || user.email

  res.json(user)
})

app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id))

  res
    .status(200)
    .json({ message: `User with ID ${req.params.id} was deleted successfully` })
})

app.listen(3333, () => {
  console.log("Server is running on http://127.0.0.1:3333")
})
