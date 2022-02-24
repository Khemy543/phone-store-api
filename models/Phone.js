const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    in_stock: {
      type: Number
    },
    category: {
      type: String
    },
    images: {
      type: Array
    },
    size: {
      type: String
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema)