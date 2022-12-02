const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const productsRoute = require("./features/products/products.router");
const userRoute = require("./features/users/user.router");
const resetpasswordRouter = require("./features/reset-password/resetPassword.router");

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/products", productsRoute);
app.use("/user", userRoute);
app.use("/reset-password", resetpasswordRouter);

app.get("/", (req, res) => res.send("hello"));

app.listen(8080, async () => {
  await dbConnect();
  console.log("server started on port 8080");
});
