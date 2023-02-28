const express = require("express");
const Cart = require("./cart.model");
const Products = require("../products/products.model");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  let token = req.headers.token;
  if (token) {
    try {
      let data = jwt.verify(token, process.env.SECRETKEY);
      if (data.id) {
        req.userId = data.id;
        next();
      }
    } catch (e) {
      res.status(500).send(e.message);
    }
  } else {
    res.status(500).send("Something went wrong");
  }
};

const app = express.Router();
app.use(authMiddleware);

app.get("/", async (req, res) => {
  let items = await Cart.find({ user: req.userId });
  let cartitems = [];
  for (var i = 0; i < items.length; i++) {
    cartitems.push({
      product: await Products.findById(items[i].product),
      quantity: items[i].quantity,
    });
  }
  res.send(cartitems);
});

app.post("/", async (req, res) => {
  try {
    let existingUserItem = await Cart.findOne({
      user: req.userId,
      product: req.body.product,
    });
    if (existingUserItem) {
      let item = await Cart.findByIdAndUpdate(existingUserItem._id, {
        quantity: req.body.quantity,
      });
      return res.send("Product Updated");
    } else {
      let item = await Cart.create({
        ...req.body,
        user: req.userId,
      });
      res.send(item);
    }
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  let existingProduct = await Cart.findOneAndDelete({
    user: req.userId,
    product: id,
  });
  res.send("Product removed sucessfully");
});

module.exports = app;
