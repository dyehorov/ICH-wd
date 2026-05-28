import express from "express"
import bcrypt from "bcrypt"
import { getDb } from "../db/index.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import authenticateToken from "../middlewares/authMiddleware.js"

dotenv.config()
const JWT_TOKEN = process.env.JWT_TOKEN

const router = express.Router()

router.post("/create-post", authenticateToken, async (req, res) => {
  try {
    const { title, content } = req.body

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" })
    }

    const newPost = {
      title,
      content,
      author: req.user.username,
      createdAt: new Date(),
    }

    const db = getDb()

    await db.collection("posts").insertOne(newPost)

    res
      .status(201)
      .json({ success: true, message: "Post created successfully" })
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" })
  }
})

router.get("/posts", async (req, res) => {
  try {
    const db = getDb()
    const posts = await db.collection("posts").find().toArray()

    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }
})

export default router
