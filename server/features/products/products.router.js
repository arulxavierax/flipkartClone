const express = require("express");
const Products = require("./products.model");

const app = express.Router();

app.get("/", async (req, res) => {
  let products = await Products.find();
  res.send(products);
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  let product = await Products.findById(id);
  res.send(product);
});

module.exports = app;
