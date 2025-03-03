import React from 'react';

const Buttons = () => {
  return (
    <div>
      {/* Large button group */}
      <div className="btn-group btn-group-lg" role="group" aria-label="...">
        <button type="button" className="btn btn-outline-secondary">1</button>
        <button type="button" className="btn btn-outline-secondary">2</button>
        <button type="button" className="btn btn-outline-secondary">3</button>
        <button type="button" className="btn btn-outline-secondary">4</button>
      </div>
      
      {/* Default button group */}
      <div className="btn-group" role="group" aria-label="...">
        <button type="button" className="btn btn-outline-secondary">5</button>
        <button type="button" className="btn btn-outline-secondary">6</button>
        <button type="button" className="btn btn-outline-secondary">7</button>
        <button type="button" className="btn btn-outline-secondary">8</button>
      </div>
      
      {/* Small button group */}
      <div className="btn-group btn-group-sm" role="group" aria-label="...">
        <button type="button" className="btn btn-outline-secondary">9</button>
        <button type="button" className="btn btn-outline-secondary">10</button>
        <button type="button" className="btn btn-outline-secondary">11</button>
        <button type="button" className="btn btn-outline-secondary">12</button>
      </div>
    </div>
  );
};

export default Buttons;
