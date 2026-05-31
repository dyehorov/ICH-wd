import express from "express"
import mongoose from "mongoose"
import Habit from "../models/Habit.js"
import Progress from "../models/Progress.js"
import authenticateJWT from "../middlewares/authentication.js"

const router = express.Router()

// POST /habits — create a habit. Needs name, category and difficulty
router.post("/create-habit", authenticateJWT, async (req, res) => {
  try {
    const { name, category, difficulty } = req.body

    if (!name || !category || !difficulty) {
      return res.status(400).json({
        success: false,
        message: "Name, category and difficulty are required",
      })
    }

    const newHabit = await Habit.create({ name, category, difficulty })

    res
      .status(201)
      .json({ success: true, message: "Habit created", data: newHabit })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// GET /habits — returns a list of all habits
router.get("/all-habits", authenticateJWT, async (req, res) => {
  try {
    const allHabits = await Habit.find({})

    res.status(200).json({ success: true, data: allHabits })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// GET /habits/:id — returns habit by its ID
router.get("/:id", authenticateJWT, async (req, res) => {
  try {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid habit id",
      })
    }

    const habit = await Habit.findById(id)

    if (!habit) {
      return res.status(404).json({
        success: false,
        message: "Habit not found",
      })
    }

    res.status(200).json({ success: true, data: habit })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// PUT /habits/:id — updates habit's info
router.put("/habits/:id", authenticateJWT, async (req, res) => {
  try {
    const id = req.params.id
    const { name, category, difficulty } = req.body

    if (!name || !category || !difficulty) {
      return res.status(400).json({
        success: false,
        message: "Name, category and difficulty are required",
      })
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid habit id",
      })
    }

    const habit = await Habit.findByIdAndUpdate(
      id,
      { name, category, difficulty },
      { new: true, runValidators: true },
    )

    if (!habit) {
      return res.status(404).json({
        success: false,
        message: "Habit not found",
      })
    }

    res.status(200).json({ success: true, data: habit })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// DELETE /habits/:id — deletes habit by its ID
router.delete("/habits/:id", authenticateJWT, async (req, res) => {
  try {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid habit id",
      })
    }

    const habit = await Habit.findByIdAndDelete(id)

    if (!habit) {
      return res.status(404).json({
        success: false,
        message: "Habit not found",
      })
    }

    res.status(200).json({
      success: true,
      message: `Habit with ID ${id} deleted successfully`,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// POST /habits/:id/complete - marks a habit as completed for today.
// The statistics should be updated automatically:
//      - if the habit was completed yesterday, the current streak is increased by 1.
//      - if there was a break yesterday, the streak is reset to 1.
//      - if the current streak exceeds the best streak, bestStreak is updated. totalCompletions is also increased by 1.

router.post("/:id/complete", authenticateJWT, async (req, res) => {
  try {
    const { id } = req.params
    const { notes, mood } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid habit id",
      })
    }

    if (!notes || mood === undefined) {
      return res.status(400).json({
        success: false,
        message: "Notes and mood are required",
      })
    }

    const habit = await Habit.findById(id)

    if (!habit) {
      return res.status(404).json({
        success: false,
        message: "Habit not found",
      })
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    const existing = await Progress.findOne({
      habitId: habit._id,
      completed: true,
      date: {
        $gte: today,
        $lt: tomorrow,
      },
    })

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Habit is already completed today",
      })
    }

    const yesterdayProgress = await Progress.findOne({
      habitId: habit._id,
      completed: true,
      date: {
        $gte: yesterday,
        $lt: today,
      },
    })

    if (yesterdayProgress) {
      habit.streak += 1
    } else {
      habit.streak = 1
    }

    if (habit.streak > habit.bestStreak) {
      habit.bestStreak = habit.streak
    }

    habit.totalCompletions += 1

    const progress = await Progress.create({
      habitId: habit._id,
      date: today,
      completed: true,
      notes,
      mood,
    })

    await habit.save()

    res.status(200).json({
      success: true,
      message: `Habit with ID ${id} completed successfully`,
      data: {
        habit,
        progress,
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

export default router
