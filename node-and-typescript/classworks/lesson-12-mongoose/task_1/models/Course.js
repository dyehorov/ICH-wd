import mongoose from "mongoose"

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minLength: [10, "Title must be at least 10 characters long"],
    maxLength: [100, "Title cannot be more than 100 characters long"],
  },
  description: {
    type: String,
    required: true,
    minLength: [20, "Description must be at least 20 characters long"],
  },
  shortDescription: {
    type: String,
    maxLength: [
      100,
      "Short description cannot be more than 100 characters long",
    ],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price cannot be negative"],
  },
  discountPrice: {
    type: Number,
    validate: {
      validator: function (discountPrice) {
        return discountPrice < this.price
      },
      message: "Discount price must be less than original price",
    },
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced", "expert"],
  },
  duration: {
    type: Number,
    required: true,
    min: [1, "Minimum duration is 1 hour"],
    max: [500, "Maximum duration is 500 hours"],
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructor",
    required: true,
  },
  categories: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  tags: {
    type: [String],
    validate: {
      validator: function (list) {
        return list.length <= 5
      },
      message: "No more than 5 tags",
    },
    default: [],
  },
  lessons: [
    {
      title: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        min: [1, "Minimum duration is 1 minute"],
      },
      videoUrl: {
        type: String,
        match: [
          /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
          "Please fill a valid URL",
        ],
      },
      isFree: {
        type: Boolean,
        default: false,
      },
    },
  ],
  requirements: {
    type: [String],
  },
  whatYouWillLearn: {
    type: [String],
  },
  totalEnrolled: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    min: [0, "Rating cannot be less than 0"],
    max: [5, "Rating cannot be greater than 5"],
    default: 0,
  },
  status: {
    type: String,
    enum: ["draft", "published", "archived"],
    default: "draft",
  },
  publishedAt: {
    type: Date,
    validate: {
      validator: function (value) {
        return this.status !== "published" || value
      },
      message: "Course is not published",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Course = mongoose.model("Course", courseSchema)

export default Course
