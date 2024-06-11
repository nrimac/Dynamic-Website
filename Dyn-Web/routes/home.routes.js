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
  res.redirect("/home/getCategories");
});

router.get("/getProducts", (req, res) => {
  res.redirect("/home/getProducts/gitare");
});

data.categories.forEach((category) => {
  let categoryName = category.name
    .toLowerCase()
    .trim()
    .replace(/ /g, "%20")
    .replace(/č/g, "%C4%8D")
    .replace(/ć/g, "%C4%87");
  router.get(`/getProducts/${categoryName}`, (req, res) => {
    res.render("home.ejs", getCategoryObjectByName(category.name));
  });
});

router.get("/getCategories", (req, res) => {
  res.render("categories.ejs", {
    categories: data.categories,
    categoryName: "Categories",
  });
});

module.exports = router;
