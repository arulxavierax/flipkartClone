const express = require("express");
const Favourite = require("../favourite/favourite.model");
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

app.get("/", async (req, res) => {
  let items = await Favourite.find({ user: req.userId });
  let favouritesitems = [];
  for (var i = 0; i < items.length; i++) {
    favouritesitems.push(await Products.findById(items[i].product));
  }
  res.send(favouritesitems);
});

app.post("/", async (req, res) => {
  try {
    let existingFavouriteItem = await Favourite.findOne({
      user: req.userId,
      product: req.body.product,
    });
    if (existingFavouriteItem) {
      let item = await Favourite.findByIdAndUpdate(existingFavouriteItem._id);
      return res.send("Product Updated");
    } else {
      let item = await Favourite.create({
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
  let existingProduct = await Favourite.findOneAndDelete({
    user: req.userId,
    product: id,
  });
  res.send("Product removed sucessfully");
});

module.exports = app;
