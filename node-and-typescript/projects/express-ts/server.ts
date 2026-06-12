import express, { Request, Response } from "express"
import {
  IUser,
  ICreateUserDto,
  IApiResponse,
  IUpdateUserDto,
  IPartialUpdateUserDto,
  IChangeEmailDto,
} from "./types/user.types"

// ====================== DATABASE ================================
const users: IUser[] = [
  { id: 1, name: "Alice", email: "alice@gd.com" },
  { id: 2, name: "Dima", email: "dima@gd.com" },
]

// ======================= SERVER =============================
const app = express()
app.use(express.json())

// ===================== GET /api/users =========================
app.get("/api/users", (req: Request, res: Response) => {
  res.json({
    success: true,
    data: users,
    count: users.length,
  })
})

// ===================== POST /api/users =========================
app.post(
  "/api/users",
  (
    req: Request<{}, {}, ICreateUserDto>,
    res: Response<IApiResponse<IUser>, {}>,
  ) => {
    const { name, email } = req.body

    if (!name || !email) {
      res.status(400).json({
        success: false,
        error: "All fileds are required",
      })
      return
    }

    if (users.some(user => user.email === email)) {
      res.status(400).json({
        success: false,
        error: "User with such email was already been registred",
      })
      return
    }

    const newUser: IUser = {
      id: users.length,
      name,
      email,
    }

    users.push(newUser)

    res.status(201).json({
      success: true,
      data: newUser,
      message: "Successfully registred",
    })
  },
)

app.put(
  "/api/users/:id",
  (
    req: Request<{ id: string }, {}, IUpdateUserDto>,
    res: Response<IApiResponse<IUser>, {}>,
  ) => {
    const id = Number(req.params.id)
    const { name, email } = req.body

    if (!name || !email)
      return res.status(400).json({
        success: false,
        error: "All fileds are required",
      })

    const userIndex = users.findIndex(user => user.id === id)

    if (userIndex === -1)
      return res.status(404).json({
        success: false,
        error: "User not found",
      })

    users[userIndex] = {
      id: id,
      name,
      email,
    }

    res.status(200).json({
      success: true,
      data: users[userIndex],
      message: "User updated successfully",
    })
  },
)

app.patch(
  "/api/users/:id",
  (
    req: Request<{ id: string }, {}, IPartialUpdateUserDto>,
    res: Response<IApiResponse<IUser>, {}>,
  ) => {
    const id = Number(req.params.id)
    const { name, email } = req.body

    const userIndex = users.findIndex(user => user.id === id)

    if (userIndex === -1)
      return res.status(404).json({
        success: false,
        error: "User not found",
      })

    if (name !== undefined) {
      users[userIndex].name = name
    }

    if (email !== undefined) {
      users[userIndex].email = email
    }

    res.status(200).json({
      success: true,
      data: users[userIndex],
      message: "User updated successfully",
    })
  },
)

app.delete(
  "/api/users/:id",
  (
    req: Request<{ id: string }>,
    res: Response<IApiResponse<{ deletedId: number }>, {}>,
  ) => {
    const id = Number(req.params.id)

    const userIndex = users.findIndex(user => user.id === id)

    if (userIndex === -1)
      return res.status(404).json({
        success: false,
        error: "User not found",
      })

    users.splice(userIndex, 1)

    res.status(200).json({
      success: true,
      data: {
        deletedId: id,
      },
      message: "User deleted successfully",
    })
  },
)

app.post(
  "/api/users/:id/change-email",
  (
    req: Request<{ id: string }, {}, IChangeEmailDto>,
    res: Response<IApiResponse<IUser>, {}>,
  ) => {
    const id = Number(req.params.id)
    const { newEmail, confirmEmail } = req.body

    const userIndex = users.findIndex(user => user.id === id)

    if (userIndex === -1)
      return res.status(404).json({
        success: false,
        error: "User not found",
      })

    const emailExists = users.some(user => user.email === newEmail)

    if (emailExists)
      return res.status(400).json({
        success: false,
        error: "Such email already exists",
      })

    if (newEmail !== confirmEmail)
      return res.status(400).json({
        success: false,
        error: "Email does not match email confirm",
      })

    users[userIndex].email = newEmail

    res.status(200).json({
      success: true,
      data: users[userIndex],
      message: "User email updated successfully",
    })
  },
)

app.listen(3333, () => {
  console.log(`TS Server is running at http://127.0.0.1:3333`)
})
