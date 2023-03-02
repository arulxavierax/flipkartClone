const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const productsRoute = require("./features/products/products.router");
const userRoute = require("./features/users/user.router");
const resetpasswordRouter = require("./features/reset-password/resetPassword.router");
const cartRouter = require("./features/cart/cart.router");
const favouriteRouter = require("./features/favourite/favourite.router");
const ordersRouter = require("./features/orders/orders.router");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/products", productsRoute);
app.use("/user", userRoute);
app.use("/reset-password", resetpasswordRouter);
app.use("/cart", cartRouter);
app.use("/favourite", favouriteRouter);
app.use("/orders", ordersRouter);

app.get("/", (req, res) => res.send("hello"));

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`server started on port ${PORT}`);
});
