const express = require("express");
const { connectToMongoDb } = require("./db/db");
const app = express();
const PORT = 3000;

//initialize middleware
app.use(express.json());

//connect to mongodb
connectToMongoDb();

const workoutRoutes = require("./routes/workout");
//
app.use("/api", workoutRoutes);

app.listen(PORT, () => {
  console.log(`connected successfully listen to port at ${PORT}`);
});
