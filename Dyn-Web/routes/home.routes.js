const express = require("express");
const router = express.Router();
const data = require("../data/myData.js");

function getCategoryObjectByName(name) {
  for (category of data.categories) {
    if (category.name.toLowerCase() === name.toLowerCase()) {
      return { products: category.products, categoryName: name };
    }
  }
  return { products: [], categoryName: name };
}

router.get("/", (req, res) => {
  res.redirect("/home/getProducts/guitars");
});

data.categories.forEach((category) => {
  let categoryName = category.name.toLowerCase().trim().replace(/ /g, '%20');
  router.get(`/${categoryName}`, (req, res) => {
    res.render("home.ejs", getCategoryObjectByName(category.name));
  });
});

router.get("/categories", (req, res) => {
  res.render("temp.ejs", { categories: data.categories });
});

module.exports = router;
