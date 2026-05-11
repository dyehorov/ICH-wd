import express from "express"
import dotenv from "dotenv"
import sequelize from "./config/db.js"
import cors from "cors"
import { User, Post } from "./models/index.js"

dotenv.config()

const app = express()
const port = process.env.PORT ?? 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello, this task_2 server!")
})

app.post("/user/create", async (req, res) => {
  const { name, email } = req.body

  const user = await User.create({ name, email })

  res.json({
    message: "User registered successfully",
  })
})

app.post("/post/create", async (req, res) => {
  const { title, author, description } = req.body

  await Post.create({ title, author, description })

  res.json({
    message: "Post created successfully",
  })
})

app.listen(port, async () => {
  try {
    await sequelize.authenticate()
    console.log("Connection to the database established!")

    console.log(`Server is running on http://127.0.0.1:${port}`)
  } catch (error) {
    console.error(`Unable to connect to the database: ${error}`)
  }
})
