import express from "express"
import User from "../models/User.js"

const router = express.Router()

router.post("/set-balance", async (req, res) => {
  try {
    const { initialBalance } = req.body

    if (
      !initialBalance ||
      isNaN(initialBalance) ||
      Number(initialBalance) < 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Error in entering initial balance",
      })
    }

    const user = await User.create({
      initialBalance: Number(initialBalance),
      currentBalance: Number(initialBalance),
    })

    return res.status(201).json({
      success: true,
      message: "User successfully created",
      user,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while creating user",
      error: error.message,
    })
  }
})

export default router
