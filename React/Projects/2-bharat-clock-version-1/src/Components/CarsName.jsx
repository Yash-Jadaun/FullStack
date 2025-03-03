import React from 'react';

const CarsName = ({ item}) => {  // Destructure `Cars` from props
  return (
    <div>
      <li>{item}</li>  {/* Display the car name */}
    </div>
  );
}

export default CarsName;
