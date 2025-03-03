import React from 'react';
import './App.css';
import Heading from './Components/Heading';
import Items from './Components/Items';
import Container from './Components/Container';

const App = () => {
  return (
    <div>
      <Heading />
      <Container> {/* Correctly using the Container component */}
        <Items />
      </Container>
    </div>
  );
};

export default App;
