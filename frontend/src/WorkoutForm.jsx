import React, { useState } from 'react';
import axios from 'axios';

export default function WorkoutForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/api/addWorkouts", {
                workOutTitle: title,
                loadInKg: load,
                reps: reps
            });
            // refresh list
            onAdd();
            // optionally clear form
            setTitle('');
            setLoad('');
            setReps('');
        } catch (error) {
            console.log("something went wrong", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Exercise Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Load (kg)"
                value={load}
                onChange={(e) => setLoad(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Reps"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                required
            />
            <button type="submit">Add Workout</button>
        </form>
    );
}
