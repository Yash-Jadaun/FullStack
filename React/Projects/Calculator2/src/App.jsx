import React, { useState } from 'react';
import Display from './Components/Display';
import Pad from './Components/Pad';
import Container from './Components/Container';

const App = () => {
  const [calVal, setCalVal] = useState(""); // Set initial value to an empty string

  // Function to handle button clicks and update the display
  const onButtonClick = (value) => {
    setCalVal(prevValue => prevValue + value); // Update the display value
  };

  return (
    <div>
      <Container>
        <Display displayValue={calVal} />
        <Pad onButtonClick={onButtonClick} />
      </Container>
    </div>
  );
};

export default App;
