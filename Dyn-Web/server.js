const express = require("express");
const app = express();
const session = require("express-session");
const port = 3000;

app.use(express.static("public"));
app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: false,
}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/home/getCategories");
});

const homeRouter = require("./routes/home.routes.js");
const cartRouter = require("./routes/cart.routes.js");

app.use("/home", homeRouter);
app.use("/cart", cartRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
