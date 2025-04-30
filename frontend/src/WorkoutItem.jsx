export default function WorkoutItem({ workout, deleteBTN }) {
  const formattedDate = new Date(workout.createdAt).toLocaleString("en-US", {
    weekday: "long", // "Monday"
    year: "numeric", // "2025"
    month: "long", // "April"
    day: "numeric", // "30"
    hour: "numeric", // "10"
    minute: "numeric", // "13"
    second: "numeric", // "25"
  });

  console.log(formattedDate);
  return (
    <div className="workout-item">
      <h3>{workout.workOutTitle}</h3>
      <p>Load (kg): {workout.loadInKg} </p>
      <p>Reps: {workout.reps}</p>
      <p>Date created: {formattedDate}</p>
      <button onClick={() => deleteBTN(workout._id)}>Delete</button>
    </div>
  );
}
