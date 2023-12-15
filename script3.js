const express = require("express");
const app = express();
const Validation = require("./middleware/Validation");
const Token = require("./middleware/Token");

const middleware = [Token, Validation];

// app.use method is a middleware
app.use(DateGenerator);

app.get("/profile", [...middleware], (req, res) => {
  console.log("user logged");
  res.send("<h1>success</h1>");
});

app.get("/", (req, res) => {
  console.log("home page");
  res.send("<h1>Home</h1>");
});

function DateGenerator(req, res, next) {
  console.log(new Date());
  next();
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server running on ${PORT}`));
