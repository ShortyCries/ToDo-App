const mongoose = require("mongoose");

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hossamemad39:DRtQXcb5ojHsePcn@cluster0.psm8up3.mongodb.net/TodoWorkout?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected successfully");
  } catch (error) {
    console.log("connection failed", error);
  }
};
module.exports = { connectToMongoDb };
