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

app.get("/users", async (req, res) => {
  const users = await getUsers()

  res.statusCode = 200
  res.send(users)
})

app.post("/user/create", async (req, res) => {
  const { name, email } = req.body

  const response = await createUser(name, email)

  if (response.error) {
    return res.status(response.status).json({
      message: response.message,
    })
  }

  return res.status(201).json(response.data)
})

app.post("/post/create", async (req, res) => {
  const { userId, title, content } = req.body

  console.log(req.body)

  const post = await createPost(userId, title, content)

  res.json(post)
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

async function createUser(name, email) {
  try {
    const userExists = await User.findOne({ where: { email } })

    if (userExists) {
      return {
        error: true,
        status: 409,
        message: "User with such email already exists",
      }
    }

    const newUser = await User.create({ name, email })

    return {
      error: false,
      data: newUser.toJSON(),
      message: `User with email ${email} registered successfully`,
    }
  } catch (error) {
    return {
      error: true,
      status: 500,
      message: error.message,
    }
  }
}

async function createPost(userId, title, content) {
  try {
    const user = await User.findByPk(userId)

    if (!user) {
      console.log("User not found")

      return
    }

    const newPost = await Post.create({
      title,
      content,
      userId,
    })

    console.log("Post created:", newPost.toJSON())

    return newPost.toJSON()
  } catch (error) {
    console.error(`Failed to create post ${error}`)
  }
}

async function getUserByEmail(email) {
  try {
    const user = await User.findOne({
      where: { email },
    })

    if (!user) {
      console.log("User not found")

      return
    }

    console.log("User found:", user.toJSON())
  } catch (error) {
    console.error(`Failed to find user: ${error}`)
  }
}

async function getUsers() {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Post,
          as: "posts",
        },
      ],
    })

    if (users.length === 0) {
      console.log("No users found")
      throw new Error("No users found")
    }

    return users
  } catch (error) {
    console.error(`There was an error getting users: ${error.message}`)
  }
}

async function findUserData(id) {
  try {
    const userData = await User.findOne({
      where: { id },
      include: [
        {
          model: Post,
          as: "posts",
        },
      ],
    })

    if (userData) {
      console.log("User was found:", userData.toJSON())
    } else {
      console.log("User not found")
    }
  } catch (error) {
    console.log(`There was an error while finding users: ${error}`)
  }
}

async function updateUser(newName, email) {
  try {
    const [updatedRowsCount] = await User.update(
      {
        name: newName,
      },
      { where: { email } },
    )

    if (updateUser < 0) {
      console.log(`No user found whith provided email`)

      return
    }

    console.log("User updated successfully")
  } catch (error) {
    console.error(`There was an error updating user: ${user}`)
  }
}
