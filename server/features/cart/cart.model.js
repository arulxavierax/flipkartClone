const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  product: {
    type: String,
    ref: "product",
    required: true,
  },
  user: {
    type: String,
    ref: "user",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
