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

router.post("/add-balance", async (req, res) => {
  try {
    const { id, addBalance } = req.body

    const amount = Number(addBalance)

    if (!id || !addBalance || isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid balance amount",
      })
    }

    const user = await User.findByIdAndUpdate(
      id,
      {
        $inc: { currentBalance: amount },
        $push: { transactions: amount },
      },
      { new: true },
    )

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    return res.status(200).json({
      success: true,
      message: "Balance updated successfully",
      user,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while adding balance",
      error: error.message,
    })
  }
})

export default router
