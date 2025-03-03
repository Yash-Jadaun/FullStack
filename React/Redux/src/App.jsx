import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, NewAdd2 } from './features/counter/counterSlice';
import './App.css';

const App = () => {
  const count = useSelector((state) => state.counter.value); // Access state
  const dispatch = useDispatch(); // Dispatch actions

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button
        onClick={() => dispatch(increment())}
        style={{ margin: '5px', padding: '10px', fontSize: '16px' }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ margin: '5px', padding: '10px', fontSize: '16px' }}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(reset())}
        style={{ margin: '5px', padding: '10px', fontSize: '16px' }}
      >
        Reset
      </button>
      <button
        onClick={() => dispatch(NewAdd2())}
        style={{ margin: '5px', padding: '10px', fontSize: '16px' }}
      >
        Add 2
      </button>
    </div>
  );
};

export default App;
