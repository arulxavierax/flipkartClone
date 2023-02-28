const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({
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
});

const Favourite = mongoose.model("favourite", favouriteSchema);

module.exports = Favourite;
