const express = require("express");
const router = express.Router();
const data = require("../data/myData.js");

router.get("/", (req, res) => {
  res.render("home.ejs", { products: data.categories[0].products });
});

router.get("/categories", (req, res) => {
  res.render("temp.ejs", { categories: data.categories });
});

module.exports = router;
