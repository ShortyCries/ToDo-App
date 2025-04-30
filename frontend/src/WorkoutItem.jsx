
export default function WorkoutItem({ workout, deleteBTN }) {
    return (
        <div className="workout-item">
            <h3>{workout.workOutTitle}</h3>
            <p>Load (kg): {workout.loadInKg} </p>
            <p>Reps: {workout.reps}</p>
            <p>Date created?</p>
            <button onClick={() => deleteBTN(workout._id)}>Delete</button>
        </div>
    );
};


