import express from "express"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import logRequest from "./middlewares/logger.js"
import authenticateJWT from "./middlewares/authentication.js"
import authorizeRole from "./middlewares/authorizeRole.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logRequest)

const users = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: await bcrypt.hash("123456", 10),
    role: "admin",
  },
  {
    id: 2,
    email: "second_user@gmail.com",
    password: await bcrypt.hash("88888888", 10),
    role: "user",
  },
  {
    id: 3,
    email: "manager@gmail.com",
    password: await bcrypt.hash("88888888", 10),
    role: "manager",
  },
]

app.post("/login", async (req, res) => {
  const { email, password } = req.body

  try {
    const user = users.find(user => user.email === email)

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid credentials" })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid credentials" })
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    )

    res.json({ success: true, message: "Successfully created token", token })
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" })
  }
})

app.get("/me", authenticateJWT, async (req, res) => {
  res.status(200).json(req.user)
})

app.get(
  "/admin/get-users",
  authenticateJWT,
  authorizeRole("admin"),
  async (req, res) => {
    res.status(200).json(users)
  },
)

app.delete(
  "/admin/delete-user/:id",
  authenticateJWT,
  authorizeRole("admin"),
  async (req, res) => {
    // deleting user

    res.json({
      success: true,
      message: `User with id ${req.params.id} deleted`,
    })
  },
)

app.listen(port, (req, res) => {
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
