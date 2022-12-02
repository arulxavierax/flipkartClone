const express = require("express");
const Products = require("./products.model");

const app = express.Router();

app.get("/", async (req, res) => {
  const { page = 1, limit = 10, orderBy = "id", order = "asc" } = req.query;
  let products = await Products.find()
    .sort({
      [orderBy]: order === "asc" ? 1 : -1,
    })
    .skip((page - 1) * limit)
    .limit(limit);
  res.send(products);
});

app.get("/category", async (req, res) => {
  const { page = 1, limit = 3, filter = "all" } = req.query;
  let products = await Products.find({
    $or: [{ category: filter }],
  })
    .skip((page - 1) * limit)
    .limit(limit);
  res.send(products);
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  let product = await Products.findById(id);
  res.send(product);
});

module.exports = app;
