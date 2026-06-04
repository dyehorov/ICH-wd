import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    default: 0,
    min: [0, "Quantity cannot be negative"],
  },
  price: {
    type: Number,
    default: 0,
    min: [0, "Price cannot be negative"],
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
})

const Product = mongoose.model("Product", productSchema)

export default Product
