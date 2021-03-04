const express = require("express");

const dotenv = require("dotenv");

const products = require("./data/products")

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running...")
})

app.get("/api/products", (req, res) => {
  res.json(products)
})

app.get("/api/products/:id", (req, res) => {
  console.log(req.params)
  const product = products.find(product => product._id === req.params.id);
  res.json(product)
})

app.listen(PORT, console.log(`Server is running in the ${process.env.NODE_ENV} mode on the port ${PORT}...`))