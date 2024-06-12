const express = require("express");
const router = express.Router();
const data = require("../data/myData.js");
const session = require("express-session");

router.get("/", (req, res) => {
  res.redirect("/cart/getAll");
});

router.get("/getAll", (req, res) => {
  res.render("cart.ejs", {
    categoryName: "Košarica",
    cartQuantity: req.session.cartQuantity,
    cart: req.session.cart,
  });
});

data.categories.forEach((category) => {
  router.post(`/add/:id`, (req, res) => {
    let chosenProduct = null;
    category.products.forEach((product) => {
      if (product.id == req.params.id) chosenProduct = product;
    });

    if (!chosenProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    chosenProduct.quantity++;

    if (typeof req.session.cart === "undefined") {
      req.session.cart = [];
      req.session.cart.push(chosenProduct);
      req.session.cartQuantity = 1;
    } else {
      const cart = req.session.cart;
      let newItem = true;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == req.params.id) {
          cart[i].quantity++;
          newItem = false;
          break;
        }
      }

      if (newItem) {
        cart.push(chosenProduct);
      }

      req.session.cartQuantity++;
    }

    console.log("cart:");
    console.log(req.session.cart);
    console.log("cart quantity:" + req.session.cartQuantity);

    res.json({ status: "OK" });
  });

  router.post(`/remove/:id`, (req, res) => {
    let chosenProduct = null;
    category.products.forEach((product) => {
      if (product.id == req.params.id) chosenProduct = product;
    });

    if (!chosenProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    if (chosenProduct.quantity == 0) return;

    chosenProduct.quantity--;

    if (typeof req.session.cart === "undefined") {
      return;
    } else {
      const cart = req.session.cart;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == req.params.id) {
          cart[i].quantity--;
          break;
        }
      }

      req.session.cartQuantity--;
    }

    console.log("cart:");
    console.log(req.session.cart);
    console.log("cart quantity:" + req.session.cartQuantity);

    res.json({ status: "OK" });
  });
});

module.exports = router;
