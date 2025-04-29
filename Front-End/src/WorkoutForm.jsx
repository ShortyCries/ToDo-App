import React, { useState } from 'react';

export default function WorkoutForm() {

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
    }

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
};


