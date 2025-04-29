
export default function WorkoutItem({ workout, deleteBTN }) {
    return (
        <div className="workout-item">
            <h3>{workout.title}</h3>
            <p>Load (kg): {workout.load} </p>
            <p>Reps: {workout.reps}</p>
            <p>Date created?</p>
            <button onClick={() => deleteBTN(workout.id)}>Delete</button>
        </div>
    );
};


