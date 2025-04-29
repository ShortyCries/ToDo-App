const { WorkoutModel } = require("../models/Workout");

const addWorkOutController = async (req, res) => {
  const { workOutTitle, loadInKg, reps } = req.body;
  const workout = await WorkoutModel.create({
    workOutTitle,
    loadInKg,
    reps,
  });
  res.send({ message: "Workout Created Successfully", workout });
};

const deleteWorkOutController = async (req, res) => {
  try {
    const { _id } = req.params;

    const deletedWorkout = await WorkoutModel.findByIdAndDelete(_id);

    if (!deletedWorkout) {
      return res.status(404).send({ message: "Workout not found" });
    }

    res.send({ message: "Workout deleted successfully", deletedWorkout });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error deleting workout", error: error.message });
  }
};

const getWorkoutController = async (req, res) => {
  try {
    const workouts = await WorkoutModel.find({});

    if (workouts.length === 0) {
      return res.status(404).send({ message: "No workouts found" });
    }

    res
      .status(200)
      .send({ message: "Workouts retrieved successfully", workouts });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error retrieving workouts", error: error.message });
  }
};
module.exports = {
  addWorkOutController,
  deleteWorkOutController,
  getWorkoutController,
};
