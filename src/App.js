import './App.css';
import { ErrorBoundary } from 'react-error-boundary'
import { useState } from 'react';
import RandomNumber from './RandomNumber';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function App() {
  const [random, setRandom] = useState('Press Button to generate random numbers between 1 to 20');
  const Generate = () => {
    setRandom(Math.floor(Math.random() * 20));
  }
  console.log(random);
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>setRandom('Press Button to generate random numbers between 1 to 20')}>
        <RandomNumber number={random} />
        
        <button onClick={Generate}>Generate Number</button>
      </ErrorBoundary>
    </div>
  );
}



export default App;
