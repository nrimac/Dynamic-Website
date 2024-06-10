const express = require("express");
const router = express.Router();
const data = require("../data/myData.js");

router.get("/", (req, res) => {
  res.render("cart.ejs", { data: data.categories });
});

module.exports = router;
