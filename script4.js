const express = require("express");
const app = express();

// for json parse
app.use(express.json());
// for handle form data
app.use(express.urlencoded({ extended: true }));
// for handling html(static folder).
app.use(express.static("views"));

const DBemail = "example@gmail.com";
const DBpassword = "123";

app.post("/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (email === DBemail && password === DBpassword) {
    res.send("Login succesful");
  } else {
    res.send("login failed");
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server running on ${PORT}`));
