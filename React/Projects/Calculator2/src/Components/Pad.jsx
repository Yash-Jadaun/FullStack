import React from 'react';
import styles from './Pad.module.css';

const Pad = ({ onButtonClick }) => {
  const handleButtonClick = (value) => {
    onButtonClick(value); // Trigger the onButtonClick function passed as prop
  };

  return (
    <div>
      <div className={styles.Container} role="group" aria-label="First group">
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('C')}>C</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('Cancel')}>Cancel</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('AC')}>AC</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('10')}>10</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('9')}>9</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('8')}>8</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('7')}>7</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('6')}>6</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('5')}>5</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('4')}>4</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('3')}>3</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('2')}>2</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('1')}>1</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('0')}>0</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('+')}>+</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('X')}>X</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('/')}>/</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('%')}>%</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('#')}>#</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('@')}>@</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('&')}> & </button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('(')}>(</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick(')')}>)</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('?')}>?</button>
      </div>
    </div>
  );
};

export default Pad;
