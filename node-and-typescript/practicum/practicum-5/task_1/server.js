import express from "express"
import dotenv from "dotenv"
import { User } from "./models/User.js"

dotenv.config()

const app = express()
const port = process.env.PORT ?? 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.statusCode = 200
  res.send("This is task_1 server")
})

app.get("/users", async (req, res) => {
  const users = await getUsers()

  res.statusCode = 200
  res.send(users)
})

async function getUsers() {
  try {
    const users = await User.findAll()

    if (users.length === 0) {
      res.statusCode = 404
      res.send("No users found")

      throw new Error("No users found")
    }

    return users
  } catch (error) {
    console.error(`There was an error while getting users: ${error.message}`)
  }
}

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
