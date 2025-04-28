const express = require("express");
const { connectToMongoDb } = require("./db/db");
const app = express();
const PORT = 3000;

//connect to mongodb
connectToMongoDb();
//
app.get("/", (req, res) => {
  res.send("Hello");
});
//listen to port current port
app.listen(PORT, () => {
  console.log(`connected successfully listen to port at ${PORT}`);
});
