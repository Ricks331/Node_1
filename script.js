const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userData = [
  { id: 1, name: "anu", company: "google" },
  { id: 2, name: "sanjay", company: "mocrosoft" },
  { id: 3, name: "manu", company: "amazon" },
];

// to get users by query params.
app.get("/user", (req, res) => {
  const userId = parseInt(req.query.id);
  const userName = req.query.name;
  const filteredUserData = userData.filter((data) => {
    if (userId || userName) {
      return data.id === userId || data.name === userName;
    } else {
      return data;
    }
  });
  res.json(filteredUserData);
});

// to filter all the user with id (path params).
app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id); // convert to int
  const filteredUserData = userData.filter((data) => data.id === userId);
  res.json(filteredUserData);
});

// to filter all the user with id and name (path params).
app.get("/user/:id/:name", (req, res) => {
  const userId = parseInt(req.params.id); // convert to int
  const userName = req.params.name;
  const filteredUserData = userData.filter(
    (data) => data.id === userId && data.name === userName
  );
  res.json(filteredUserData);
});

// works when no router found.
app.get("*", (req, res) => {
  res.json("No route available");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server running on ${PORT}`));