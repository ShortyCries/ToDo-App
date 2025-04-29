import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import './App.css';

const App = () => {

  return (
    <>
      <header>
        <h1>Workout Partner</h1>
      </header>

      <div className="container">
        <WorkoutForm />
        <WorkoutList />
      </div>
    </>
  );
};

export default App;
