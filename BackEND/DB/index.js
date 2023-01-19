const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const {
  userRoutes,
} = require("./routes");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
connect();
app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("Hello world :))");
});

app.listen(port, () => {
  console.log("Server running at:", port);
});