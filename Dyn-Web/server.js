const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/home");
});

const homeRouter = require("./routes/home.routes.js");

app.use("/home", homeRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
