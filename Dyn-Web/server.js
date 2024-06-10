const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/home/getProducts/guitars");
});

const homeRouter = require("./routes/home.routes.js");
const cartRouter = require("./routes/cart.routes.js");
app.use("/home/getProducts", homeRouter);
app.use("/cart", cartRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
