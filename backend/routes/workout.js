const express = require("express");
const {
  addWorkOutController,
  getWorkoutController,
  deleteWorkOutController,
} = require("../controllers/WorkoutController");
const router = express.Router();

// Create a new workout
router.post("/workouts", addWorkOutController);

// Get all workouts
router.get("/workouts", getWorkoutController);

// Delete a workout by ID
router.delete("/workouts/:_id", deleteWorkOutController);
