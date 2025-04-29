const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  workOutTitle: {
    type: String,
    required: true,
  },
  loadInKg: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const WorkoutModel = mongoose.model("Workout", WorkoutSchema);

module.exports = { WorkoutModel };
