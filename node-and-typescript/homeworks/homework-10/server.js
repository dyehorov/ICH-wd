import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import authenticateJWT from "./middlewares/authentication.js"
import authorizeRole from "./middlewares/authorizeRole.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const JWT_TOKEN = process.env.JWT_TOKEN

app.use(express.json())

let users = [
  {
    id: 1,
    username: "admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    role: "admin",
  },
  {
    id: 2,
    username: "user",
    email: "user@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    role: "user",
  },
]

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    const user = users.find(item => item.email === email)

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      JWT_TOKEN,
      { expiresIn: "1h" },
    )

    return res.json({ message: "Successfully logged in", token })
  } catch (error) {
    return res.status(500).json({ message: "Login error" })
  }
})

app.put("/update-email", authenticateJWT, (req, res) => {
  try {
    const { newEmail } = req.body
    const user = users.find(item => item.id === req.user.id)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    user.email = newEmail

    return res.json({
      message: "Email updated successfully",
      user,
    })
  } catch (error) {
    return res.status(500).json({ message: "Error updating email" })
  }
})

app.delete("/delete-account", authenticateJWT, (req, res) => {
  try {
    const userExists = users.find(item => item.id === req.user.id)

    if (!userExists) {
      return res.status(404).json({ message: "User not found" })
    }

    users = users.filter(item => item.id !== req.user.id)

    console.log(users)

    return res.json({ message: "Account deleted successfully" })
  } catch (error) {
    return res.status(500).json({ message: "Error deleting account" })
  }
})

app.put("/update-role", authenticateJWT, authorizeRole("admin"), (req, res) => {
  try {
    const { userId, newRole } = req.body
    const user = users.find(item => item.id === userId)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    user.role = newRole

    return res.json({ message: "Role updated successfully" })
  } catch (error) {
    return res.status(500).json({ message: "Error updating role" })
  }
})

app.post("/refresh-token", authenticateJWT, (req, res) => {
  try {
    const currentToken = req.headers.authorization.split(" ")[1]

    jwt.verify(currentToken, JWT_TOKEN)

    const newToken = jwt.sign(
      {
        id: req.user.id,
        username: req.user.username,
        email: req.user.email,
        role: req.user.role,
      },
      JWT_TOKEN,
      { expiresIn: "1h" },
    )

    return res.json({
      message: "Token refreshed successfully",
      token: newToken,
    })
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" })
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
