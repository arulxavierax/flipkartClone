const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  return mongoose.connect(
    `mongodb+srv://flipkart:${process.env.DATABASE_PASSWORD}@cluster0.mbnhzdq.mongodb.net/?retryWrites=true&w=majority`
  );
};

module.exports = dbConnect;
