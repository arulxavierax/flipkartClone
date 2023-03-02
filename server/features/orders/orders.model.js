const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
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
  date: {
    type: String,
    required: true,
  },
});

const Orders = mongoose.model("order", ordersSchema);

module.exports = Orders;
