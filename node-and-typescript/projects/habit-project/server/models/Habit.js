import mongoose from "mongoose"

const habitScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Habit's name must be at least 3 characters long"],
  },
  category: {
    type: String,
    enum: ["health", "education", "productivity", "mindfullness"],
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  streak: {
    type: Number,
    default: 0,
  },
  bestStreak: {
    type: Number,
    default: 0,
  },
  totalCompletions: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

const Habit = mongoose.model("Habit", habitScheme)

export default Habit
