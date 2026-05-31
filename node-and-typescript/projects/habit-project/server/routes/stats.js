import express from "express"
import Progress from "../models/Progress.js"
import Habit from "../models/Habit.js"
import authenticateJWT from "../middlewares/authentication.js"

const router = express.Router()

const dayNames = {
  1: "Sunday",
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
  7: "Saturday",
}

const monthNames = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
}

// GET /stats/longest-streak
// Find the habit with the longest current completion streak. Return the habit’s name, category, difficulty, and the number of days in the current streak.

router.get("/longest-streak", authenticateJWT, async (req, res) => {
  try {
    const habit = await Habit.findOne({ streak: { $gt: 0 } })
      .sort({ streak: -1 })
      .select("name category difficulty streak")

    if (!habit) {
      return res.status(404).json({
        success: false,
        message: "No active streak found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Habit with the longest streak",
      data: {
        name: habit.name,
        category: habit.category,
        difficulty: habit.difficulty,
        currentStreak: habit.streak,
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

// (GET /stats/best-day)
// Best day of the week

router.get("/best-day", authenticateJWT, async (req, res) => {
  try {
    const result = await Progress.aggregate([
      {
        $match: {
          completed: true,
        },
      },
      {
        $group: {
          _id: {
            $dayOfWeek: "$date",
          },
          count: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
      {
        $limit: 1,
      },
    ])

    if (!result.length) {
      return res.status(404).json({
        success: false,
        message: "No completed habits found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Most productive day of the week",
      data: {
        dayName: dayNames[result[0]._id],
        count: result[0].count,
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

// GET /stats/best-month
router.get("/best-month", authenticateJWT, async (req, res) => {
  try {
    const result = await Progress.aggregate([
      {
        $match: {
          completed: true,
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$date" },
            month: { $month: "$date" },
          },
          completions: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          completions: -1,
        },
      },
      {
        $limit: 1,
      },
    ])

    if (!result.length) {
      return res.status(404).json({
        success: false,
        message: "No completed habits found",
      })
    }

    const bestMonth = result[0]

    res.status(200).json({
      success: true,
      message: "Most productive month",
      data: {
        monthName: monthNames[bestMonth._id.month],
        year: bestMonth._id.year,
        completions: bestMonth.completions,
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

// GET /stats/abandoned - habits that have not been completed for more than 7 days.
router.get("/abandoned", authenticateJWT, async (req, res) => {
  try {
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

    const result = await Progress.aggregate([
      {
        $match: {
          completed: true,
        },
      },
      {
        $group: {
          _id: "$habitId",
          lastCompleted: {
            $max: "$date",
          },
        },
      },
      {
        $match: {
          lastCompleted: {
            $lt: sevenDaysAgo,
          },
        },
      },
      {
        $lookup: {
          from: "habits",
          localField: "_id",
          foreignField: "_id",
          as: "habit",
        },
      },
      {
        $unwind: "$habit",
      },
      {
        $project: {
          _id: 0,
          name: "$habit.name",
          category: "$habit.category",
          lastCompleted: 1,
          daysSince: {
            $dateDiff: {
              startDate: "$lastCompleted",
              endDate: "$$NOW",
              unit: "day",
            },
          },
        },
      },
    ])

    res.status(200).json({
      success: true,
      message: "Abandoned habits",
      count: result.length,
      data: result,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// GET /stats/mood-correlation
// Calculate the average mood score for each habit difficulty level.
router.get("/mood-correlation", authenticateJWT, async (req, res) => {
  try {
    const result = await Progress.aggregate([
      {
        $match: {
          completed: true,
        },
      },
      {
        $lookup: {
          from: "habits",
          localField: "habitId",
          foreignField: "_id",
          as: "habit",
        },
      },
      {
        $unwind: "$habit",
      },
      {
        $group: {
          _id: "$habit.difficulty",
          averageMood: {
            $avg: "$mood",
          },
          totalCompletions: {
            $sum: 1,
          },
        },
      },
      {
        $project: {
          _id: 0,
          difficulty: "$_id",
          averageMood: {
            $round: ["$averageMood", 1],
          },
          totalCompletions: 1,
        },
      },
      {
        $sort: {
          difficulty: 1,
        },
      },
    ])

    res.status(200).json({
      success: true,
      message: "How mood affects habit difficulty",
      data: result,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// GET /stats/perfect-day
// Find the day with the most completed habits and an average mood score above 4.
router.get("/perfect-day", authenticateJWT, async (req, res) => {
  try {
    const result = await Progress.aggregate([
      {
        $match: {
          completed: true,
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$date",
            },
          },
          completions: {
            $sum: 1,
          },
          averageMood: {
            $avg: "$mood",
          },
        },
      },
      {
        $match: {
          averageMood: {
            $gt: 4,
          },
        },
      },
      {
        $sort: {
          completions: -1,
          averageMood: -1,
        },
      },
      {
        $limit: 1,
      },
      {
        $project: {
          _id: 0,
          date: "$_id",
          completions: 1,
          averageMood: {
            $round: ["$averageMood", 1],
          },
        },
      },
    ])

    if (!result.length) {
      return res.status(404).json({
        success: false,
        message: "No perfect day found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Perfect day",
      data: result[0],
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// GET /stats/golden-mean
// Find the habit whose total completions are closest to the average across all habits.
router.get("/golden-mean", authenticateJWT, async (req, res) => {
  try {
    const result = await Habit.aggregate([
      {
        $group: {
          _id: null,
          averageCompletions: {
            $avg: "$totalCompletions",
          },
          habits: {
            $push: {
              name: "$name",
              totalCompletions: "$totalCompletions",
            },
          },
        },
      },
      {
        $unwind: "$habits",
      },
      {
        $project: {
          _id: 0,
          habit: "$habits",
          averageCompletions: 1,
          difference: {
            $abs: {
              $subtract: ["$habits.totalCompletions", "$averageCompletions"],
            },
          },
        },
      },
      {
        $sort: {
          difference: 1,
        },
      },
      {
        $limit: 1,
      },
      {
        $project: {
          habit: 1,
          averageCompletions: {
            $round: ["$averageCompletions", 1],
          },
          difference: {
            $round: ["$difference", 1],
          },
        },
      },
    ])

    if (!result.length) {
      return res.status(404).json({
        success: false,
        message: "No habits found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Habit closest to average completions",
      data: result[0],
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// GET /stats/burnout
// Find habits whose current streak is greater than their total completions.
router.get("/burnout", authenticateJWT, async (req, res) => {
  try {
    const result = await Habit.aggregate([
      {
        $match: {
          $expr: {
            $gt: ["$streak", "$totalCompletions"],
          },
        },
      },
      {
        $project: {
          _id: 0,
          name: 1,
          streak: 1,
          totalCompletions: 1,
          difference: {
            $subtract: ["$streak", "$totalCompletions"],
          },
        },
      },
      {
        $sort: {
          difference: -1,
        },
      },
    ])

    res.status(200).json({
      success: true,
      message: "Habits at risk of burnout",
      count: result.length,
      data: result,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// GET /stats/dashboard
// Return overall statistics including total habits, total completions, the habit with the best streak record, and the average mood across all completed habits.
router.get("/dashboard", authenticateJWT, async (req, res) => {
  try {
    const totalHabits = await Habit.countDocuments()

    const completionsStats = await Habit.aggregate([
      {
        $group: {
          _id: null,
          totalCompletions: {
            $sum: "$totalCompletions",
          },
        },
      },
    ])

    const bestHabit = await Habit.findOne()
      .sort({ bestStreak: -1 })
      .select("name category difficulty bestStreak")

    const moodStats = await Progress.aggregate([
      {
        $match: {
          completed: true,
        },
      },
      {
        $group: {
          _id: null,
          averageMood: {
            $avg: "$mood",
          },
        },
      },
    ])

    res.status(200).json({
      success: true,
      message: "Dashboard statistics",
      data: {
        totalHabits,
        totalCompletions: completionsStats[0]?.totalCompletions || 0,
        bestHabit,
        averageMood: Number((moodStats[0]?.averageMood || 0).toFixed(1)),
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
