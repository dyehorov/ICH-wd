import express, { urlencoded } from "express"
import sequelize from "./config/database.js"
import dotenv from "dotenv"
import cors from "cors"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import authorize from "./middlewares/authorize.js"
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

// POST /register
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body

    const newUser = await User.create({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    })

    res.status(201).json({
      success: true,
      data: {
        id: newUser.id,
        username,
        email,
      },
      message: "User successfully registered",
    })
  } catch (error) {
    if (error.message === "SequelizeUniqueConstraintError") {
      res.status(409).json({
        success: false,
        error: error.message,
      })
    } else {
      res.status(500).json({
        success: false,
        error: error.message,
      })
    }
  }
})

// POST /login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" })

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch)
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" })

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username,
      },
      process.env.JWT_TOKEN,
      { expiresIn: "1h" },
    )

    res.status(201).json({
      success: true,
      message: "Successfully logged in",
      token,
    })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
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

app.post("/posts", authorize, async (req, res) => {
  try {
    const { title, content, published } = req.body
    console.log(req.user)

    const { id: userId } = req.user

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

// GET /posts posts list with author's data
app.get("/posts", async (req, res) => {
  try {
    const { limit, offset } = req.query

    const posts = await Post.findAndCountAll({
      where: { published: 1 },
      include: [{ model: User, attributes: ["id", "username"] }],
      limit: limit ? parseInt(limit) : 5,
      offset: offset ? parseInt(offset) : 0,
      order: [["createdAt", "DESC"]],
    })

    res.json({
      success: true,
      total: posts.count,
      limit: limit ? parseInt(limit) : 5,
      offset: offset ? parseInt(offset) : 0,
      data: posts.rows,
    })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// GET /posts/:id get a post along with its author and comments
// * including comment authors
// * increment the views counter when the post is viewed.
app.get("/posts/:id", async (req, res) => {
  try {
    const postId = parseInt(req.params.id)
    const post = await Post.findByPk(postId, {
      include: [
        { model: User, attributes: ["id", "username"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["id", "username"] }],
          order: [["createdAt", "ASC"]],
        },
      ],
    })

    if (!post) {
      return res.status(404).json({ success: false, error: "Post not found" })
    }

    await post.increment("views")
    res.json({ success: true, data: post })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

//GET /stats — statistics:
// * Total number of posts
// * Number of published posts
// * Total number of comments
// * Top 5 posts by views

app.get("/stats", async (request, response) => {
  try {
    const totalPosts = await Post.count()
    const publishedPost = await Post.count({ where: { published: 1 } })
    const totalComments = await Comment.count()

    const topFivePosts = await Post.findAll({
      attributes: ["id", "title", "views"],
      order: [["views", "DESC"]],
      limit: 5,
    })

    response.status(200).json({
      success: true,
      data: {
        totalPosts,
        publishedPost,
        draftedPosts: totalPosts - publishedPost,
        totalComments,
        topFivePostsByViews: topFivePosts,
      },
    })
  } catch (error) {
    response.status(500).json({ success: false, message: error.message })
  }
})

app.use((req, res) => {
  res.status(404).json({ success: false, error: "Route not found" })
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
