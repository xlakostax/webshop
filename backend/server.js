// const express = require("express");
import express from "express";

// const dotenv = require("dotenv");
import dotenv from "dotenv";

// const products = require("./data/products")
import products from "./data/products.js"

import connectDB from "./config/db.js"

const app = express();

dotenv.config();

connectDB();

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