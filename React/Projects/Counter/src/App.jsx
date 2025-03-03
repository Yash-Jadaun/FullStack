import React, { useState } from "react";
import Counter from "./components/Counter";
import Buttons from "./components/Buttons";
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);

  // Functions to handle actions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <Counter count={count} />
      <Buttons increment={increment} decrement={decrement} reset={reset} />
    </div>
  );
};

export default App;
