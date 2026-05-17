import express from "express"
import bcrypt from "bcrypt"
import cors from "cors"

const app = express()
const port = 3333

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: "*",
  }),
)

const users = [
  {
    id: 1,
    username: "Alice",
    password: await bcrypt.hash("12345", 10),
    email: "alice@gmail.com",
    name: "Alice Joe",
  },
  {
    id: 2,
    username: "Bob",
    password: await bcrypt.hash("Bob12345", 10),
    email: "bob@gmail.com",
    name: "Bob Thompson",
  },
]

app.post("/register", async (req, res) => {
  try {
    const { username, password, email, name } = req.body

    const user = users.find(user => user.email === email)

    if (user) {
      res.status(409).json({ error: true, message: "User already exists" })

      return
    }

    const newUser = {
      id: users.length + 1,
      username,
      password: await bcrypt.hash(password, 10),
      email,
      name,
    }

    users.push(newUser)

    console.log(users)

    res.status(201).json({
      message: "User was successfully registered",
      name: newUser.name,
      email: newUser.email,
    })
  } catch (error) {
    console.log("There was an error while registering a user:", error.message)
  }
})

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body

    const user = users.find(user => user.username === username)

    if (!user) {
      return res
        .status(400)
        .json({ error: true, message: "Invalid credentials" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ error: true, message: "Invalid credentials" })
    }

    res.status(200).json({
      message: "User was successfully logged in",
      name: user.name,
      email: user.email,
    })
  } catch (error) {
    console.error("There was an error while loggin in:", error.message)
  }
})

app.get("/profile/:id", async (req, res) => {
  const userId = Number(req.params.id)

  try {
    const user = users.find(user => user.id === userId)

    if (!user) {
      return res.status(404).send("User was not found")
    }

    res.json({
      username: user.name,
      email: user.email,
    })
  } catch (error) {
    console.log("There was an error while finding user:", error.message)
  }
})

app.put("/profile/:id", async (req, res) => {
  const userId = Number(req.params.id)

  try {
    const user = users.find(user => user.id === userId)

    if (!user) {
      return res.status(404).send("User was not found")
    }

    const { name, email, username } = req.body

    if (name) user.name = name
    if (email) user.email = email
    if (username) user.username = username

    console.log(users)

    res.status(200).json({
      message: "User successfully updated",
      name: user.name,
      email: user.email,
      username: user.username,
    })
  } catch (error) {
    console.log("There was an error while editing user:", error.message)

    res.status(500).send("Internal server error")
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
