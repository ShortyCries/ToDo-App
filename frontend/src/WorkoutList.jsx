import React from 'react';
import WorkoutItem from './WorkoutItem';
import axios from 'axios';

export default function WorkoutList({ workouts, setWorkouts }) {
    const deleteWorkout = async (_id) => {
        try {
            await axios.delete(`http://localhost:3000/api/deleteWorkouts/${_id}`);
            setWorkouts((prev) => prev.filter((w) => w._id !== _id));
        } catch (error) {
            console.error("Failed to delete workout:", error);
        }
    };

    return (
        <div>
            {workouts.map((workout) => (
                <WorkoutItem key={workout._id} workout={workout} deleteBTN={deleteWorkout} />
            ))}
        </div>
    );
}
