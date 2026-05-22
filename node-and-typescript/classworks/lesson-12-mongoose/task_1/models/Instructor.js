import mongoose from "mongoose"

const instructorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: [5, "Full name must be at least 3 characters long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  bio: {
    maxLength: [500, "Bio cannot be more than 500 characters long"],
  },
  specialization: {
    type: [String],
    validate: {
      validator: function (list) {
        return list.length <= 3
      },
      message: "No more than 3 specializations",
    },
  },
  rating: {
    type: Number,
    min: [0, "Rating cannot be less than 0"],
    max: [5, "Rating cannot be more than 5"],
    default: 0,
  },
  totalStudents: {
    type: Number,
    min: [0, "Number of students cannot be less than 0"],
    default: 0,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  socialLinks: {
    youtube: {
      type: String,
      required: false,
    },
    telegram: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
  },
  joinedAt: {
    type: Date,
    default: Date.now(),
  },
})

const Instructor = mongoose.model("Instructor", instructorSchema)

export default Instructor
