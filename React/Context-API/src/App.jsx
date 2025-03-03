import React, { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Count from './components/Count';

const App = () => {
  // Initializing state
  const [count, setNewCount] = useState(0); // Set the count state as a number

  // Increment function
  const increment = () => {
    setNewCount(count + 1); // Increment the count by 1
  };

  // Decrement function
  const decrement = () => {
    setNewCount(count - 1); // Decrement the count by 1
  };

  // Reset function
  const reset = () => {
    setNewCount(0); // Reset the count to 0
  };

  return (
    <div>
      <h1>Counter App</h1>
      <Count count={count} /> {/* Passing the count to the Count component */}
      <Buttons increment={increment} decrement={decrement} reset={reset} /> {/* Passing functions as props */}
    </div>
  );
};

export default App;
