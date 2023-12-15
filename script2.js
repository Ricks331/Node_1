const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views","index.html" ));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "views","contact.html" ));
  });

app.get("*",(req,res)=>{
    res.status(404).send("<h1>404</h1>")
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server running on ${PORT}`));
