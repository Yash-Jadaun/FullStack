import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Expensive Calculation...");
    return count * 100;
  }, [count]); // Jab count change hoga tabhi calculation hoga

  return (
    <div>
      <h1>Result: {expensiveCalculation}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;