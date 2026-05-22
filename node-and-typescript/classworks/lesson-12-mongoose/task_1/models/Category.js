import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [3, "Category name must be at least 3 characters long"],
    maxLength: [50, "Category name cannot be more than 50 characters long"],
  },
  description: {
    maxLength: [200, "Description cannot be more than 200 characters long"],
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ParentCategory",
    default: null,
  },
})

const Category = mongoose.model("Category", categorySchema)

export default Category
