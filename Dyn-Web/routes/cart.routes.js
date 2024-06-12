const express = require("express");
const router = express.Router();
const data = require("../data/myData.js");

router.get("/", (req, res) => {
  res.render("cart.ejs", { categoryName: "Košarica", cartQuantity: req.session.cartQuantity });
});

module.exports = router;
