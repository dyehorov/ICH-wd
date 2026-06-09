import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  initialBalance: {
    type: Number,
    required: true,
    min: [0, "Initial balance cannot be negative"],
  },
  currentBalance: {
    type: Number,
    min: [0, "Current balance cannot be negative"],
  },
  transactions: {
    type: [Number],
    default: [],
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model("User", userSchema)

export default User
