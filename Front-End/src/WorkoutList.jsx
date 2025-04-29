import React, { useState } from 'react';
import WorkoutItem from './WorkoutItem';

export default function WorkoutList() {
    const [workouts, setWorkouts] = useState([
        {
            id: '1',
            title: 'Push Ups',
            load: 0,
            reps: 30
        },
        {
            id: '2',
            title: 'Bench Press',
            load: 50,
            reps: 10
        },
        {
            id: '3',
            title: 'Deadlift',
            load: 80,
            reps: 5
        }
    ]);

    const deleteWorkout = (id) => {
        setWorkouts(workouts.filter((workout) => workout.id !== id));
    };

    return (
        <div>
            {workouts.map((workout) => (
                <WorkoutItem key={workout.id} workout={workout} deleteBTN={deleteWorkout} />
            ))}
        </div>
    );
};


/* this will list all the workout items. and will probably send information to workoutItem through probs
       so it can have the formation of the workout */

/* also should probably add a an id to each workout so the delete button works */

/* ask jameel he should know this :D */