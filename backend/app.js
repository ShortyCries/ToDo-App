const express = require("express");
const cors = require('cors');
const { connectToMongoDb } = require("./db/db");
const app = express();
const PORT = 3000;


app.use(cors({
  origin: 'http://localhost:5173',
  methods: ["GET", "POST", "DELETE"]
}));

app.use(express.json());

connectToMongoDb();

const workoutRoutes = require("./routes/workout");
app.use("/api", workoutRoutes);

app.listen(PORT, () => {
  console.log(`connected successfully listen to port at ${PORT}`);
});
