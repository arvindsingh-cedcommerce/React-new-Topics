import './App.css';
import RandomNumbers from './RandomNumbers';
import ErrorBoundary from './ErrorBoundary';
import { useState } from 'react';

const App = () => {
  const [num1, setNum1] = useState('random numbers from  1 to 20 ')
  function Generate1() {
    setNum1(Math.floor(Math.random() * 20))
  }

  const [num2, setNum2] = useState('Press below button to generate random numbers between 1 ro 20');
  function Generate2() {
    setNum2(Math.floor(Math.random() * 20));
  }
  
  return (
    <div className="App">
      <p style={{ border: '1px solid gray', padding: '2rem', margin: '1rem' }}>
        <h5>Create a app that generates a random number between 1 to 20. Display fallback UI whenever this number is less than 5</h5>
        <ErrorBoundary>
          <RandomNumbers number={num1} />
          <button onClick={Generate1}>Generate Number</button>
        </ErrorBoundary>
      </p>
    </div>
  );
}

export default App;
