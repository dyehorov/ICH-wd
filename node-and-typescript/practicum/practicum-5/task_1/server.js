import express from "express"
import dotenv from "dotenv"
import { User } from "./models/User.js"

dotenv.config()

const app = express()
const port = process.env.PORT ?? 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.status(200).send("This is task_1 server")
})

app.get("/users", async (req, res) => {
  try {
    const users = await getUsers()

    if (!users || users.length === 0) {
      return res.status(404).json({
        message: "No users found",
      })
    }

    return res.status(200).json(users)
  } catch (error) {
    console.error("There was an error while getting users:", error.message)

    return res.status(500).json({
      message: error.message,
    })
  }
})

app.post("/users", async (req, res) => {
  try {
    const { name, email, age } = req.body

    const response = await createUser(name, email, age)

    if (response.error) {
      return res.status(response.status).json({
        message: response.message,
      })
    }

    return res.status(201).json({
      message: response.message,
      user: response.data,
    })
  } catch (error) {
    console.error("There was an error while creating a user:", error.message)

    return res.status(500).json({
      message: error.message,
    })
  }
})

app.get("/user/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id)
    const user = await getUserById(userId)

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      })
    }

    return res.status(200).json(user)
  } catch (error) {
    console.error("There was an error while getting a user:", error.message)

    return res.status(500).json({
      message: error.message,
    })
  }
})

app.delete("/user/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id)
    const deleted = await deleteUser(userId)

    if (!deleted) {
      return res.status(404).json({
        message: "User not found",
      })
    }

    return res.status(200).json({
      message: `User with id ${userId} was successfully deleted`,
    })
  } catch (error) {
    console.error("There was an error while deleting a user:", error.message)

    return res.status(500).json({
      message: error.message,
    })
  }
})

async function createUser(name, email, age) {
  try {
    const userExists = await User.findOne({ where: { email } })

    if (userExists) {
      return {
        error: true,
        status: 409,
        message: "User with such email already exists",
      }
    }

    const newUser = await User.create({ name, email, age })

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

async function getUsers() {
  try {
    const users = await User.findAll()

    return users
  } catch (error) {
    console.error(`There was an error while getting users: ${error.message}`)

    return null
  }
}

async function getUserById(id) {
  try {
    const user = await User.findOne({
      where: { id },
    })

    return user
  } catch (error) {
    console.error(`Failed to find user: ${error.message}`)

    return null
  }
}

async function deleteUser(id) {
  try {
    const deletedRows = await User.destroy({
      where: { id },
    })

    return deletedRows
  } catch (error) {
    console.error(`Failed to delete user: ${error.message}`)

    return null
  }
}

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
