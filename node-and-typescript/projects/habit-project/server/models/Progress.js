import mongoose from "mongoose"

const progressScheme = new mongoose.Schema({
  habitId: {
    type: mongoose.Types.ObjectId,
    ref: "Habit",
    required: true,
  },
  date: {
    type: Date,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  notes: {
    type: String,
  },
  mood: {
    type: Number,
    min: [1, "Mood must be between 1 and 5"],
    max: [5, "Mood must be between 1 and 5"],
    required: true,
  },
})

const Progress = mongoose.model("Progress", progressScheme)

export default Progress
