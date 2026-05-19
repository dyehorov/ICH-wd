import express, { urlencoded } from "express"
import sequelize from "./config/database.js"
import dotenv from "dotenv"
import cors from "cors"
// import "./config/sync.js"
import { User, Post, Comment } from "./models/index.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)

  next()
})

// POST /users - creating user
app.post("/users", async (req, res) => {
  try {
    const { username, email, password } = req.body

    const user = await User.create({ username, email, password })

    res.status(201).json({
      success: true,
      data: { id: user.id, username: user.name, id: user.id },
      message: "User successfully registered",
    })
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(409)
        .json({ success: false, message: "Username of email already exist" })
    }

    res.status(400).json({ success: false, message: error.message })
  }
})

// POST /posts - creating post

app.post("/posts", async (req, res) => {
  try {
    const { title, content, userId, published } = req.body

    const user = await User.findByPk(Number(userId))

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" })
    }

    const post = await Post.create({ title, content, userId, published })

    res
      .status(201)
      .json({ success: true, data: post, message: "Post successfully created" })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
})

// POST /posts/:postId/comments - creating commentary for post

app.post("/posts/:postId/comments", async (req, res) => {
  try {
    const postId = Number(req.params.postId)

    const { content, userId } = req.body

    const post = await Post.findByPk(postId)
    const user = await User.findByPk(userId)

    if (!post)
      return res
        .status(404)
        .json({ success: false, message: "Post was not found" })

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User was not found" })

    const comment = await Comment.create({ content, postId, userId })

    res.status(201).json({
      success: true,
      data: comment,
      message: "Comment successfully created",
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.get("/users/:id/posts", async (req, res) => {
  try {
    const userId = Number(req.params.id)

    const posts = await Post.findAll({
      where: { userId },
      include: {
        model: Comment,
        include: [{ model: User, attributes: ["id", "username"] }],
        order: [["createdAt", "DESC"]],
      },
    })

    res.status(200).json({ success: true, data: posts })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

async function startServer() {
  try {
    await sequelize.authenticate()
    console.log("Database connected")

    app.listen(port, () => {
      console.log(`Server is running on http://127.0.0.1:${port}`)
    })
  } catch (error) {
    console.log("Database error:", error.message)
  }
}

startServer()
