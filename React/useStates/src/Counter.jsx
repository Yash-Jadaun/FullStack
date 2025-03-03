import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // Initial count = 0

  const increment = () => {
    setCount(count + 1); // Count ko 1 badhane ka function
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increase</button>
    </div>
  );
};

export default Counter;
