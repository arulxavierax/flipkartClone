const express = require("express");
const Orders = require("./orders.model");
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
    res.status(500).send("Login to your Account");
  }
};

const app = express.Router();
app.use(authMiddleware);

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();

app.get("/", async (req, res) => {
  let items = await Orders.find({ user: req.userId });
  let ordersitems = [];
  for (var i = 0; i < items.length; i++) {
    ordersitems.push({
      product: await Products.findById(items[i].product),
      quantity: items[i].quantity,
      date: items[i].date,
    });
  }
  res.send(ordersitems);
});

app.post("/", async (req, res) => {
  try {
    let existingUserItem = await Orders.findOne({
      user: req.userId,
      product: req.body.product,
    });
    if (existingUserItem) {
      let item = await Orders.findByIdAndUpdate(existingUserItem._id, {
        quantity: req.body.quantity,
        date: day + "/" + month + "/" + year,
      });
      return res.send("Product Updated");
    } else {
      let item = await Orders.create({
        ...req.body,
        user: req.userId,
        date: day + "/" + month + "/" + year,
      });
      res.send(item);
    }
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = app;
