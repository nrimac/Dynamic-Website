const express = require("express");
const router = express.Router();
const data = require("../data/myData.js");
const session = require("express-session");

function getCategoryObjectByName(cartQuantity, name) {
  for (category of data.categories) {
    if (category.name.toLowerCase() === name.toLowerCase()) {
      return {
        products: category.products,
        categoryName: name,
        cartQuantity: cartQuantity,
      };
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
    .trim()
    .replace(/ /g, "%20")
    .replace(/č/g, "%C4%8D")
    .replace(/ć/g, "%C4%87");

  router.get(`/getProducts/${categoryName}/:id`, (req, res) => {
    if (typeof req.session.cart === "undefined") {
      req.session.cart = [];
      req.session.cart.push({ id: req.params.id, quantity: 1 });
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
        cart.push({ id: req.params.id, quantity: 1 });
      }

      req.session.cartQuantity++;
    }

    category.products.forEach((product) => {
      if (product.id == req.params.id) product.quantity++;
    });

    console.log("cart:");
    console.log(req.session.cart);
    console.log("cart quantity:" + req.session.cartQuantity);

    res.redirect("back");
  });
});

data.categories.forEach((category) => {
  let categoryName = category.name
    .trim()
    .replace(/ /g, "%20")
    .replace(/č/g, "%C4%8D")
    .replace(/ć/g, "%C4%87");
  router.get(`/getProducts/${categoryName}`, (req, res) => {
    res.render(
      "home.ejs",
      getCategoryObjectByName(req.session.cartQuantity, category.name)
    );
  });
});

router.get("/getCategories", (req, res) => {
  res.render("categories.ejs", {
    categories: data.categories,
    categoryName: "Categories",
  });
});

module.exports = router;
