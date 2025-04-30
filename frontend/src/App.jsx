import { useEffect, useState } from "react";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";
import "./App.css";
import axios from "axios";

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  const getWorkOuts = async () => {
    const res = await axios.get("http://localhost:3000/api/workouts");
    setWorkouts(res.data.workouts);
  };

  useEffect(() => {
    getWorkOuts();
  }, []);

  return (
    <>
      <header>
        <h1>Workout Partner</h1>
      </header>

      <div className="container">
        <WorkoutForm onAdd={getWorkOuts} />
        <WorkoutList workouts={workouts} setWorkouts={setWorkouts} />
      </div>
    </>
  );
};

export default App;
