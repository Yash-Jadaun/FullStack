
import React from 'react';
import CarsName from './CarsName';
import styles from './Cars.module.css'

const Cars = () => {
  const cars = ['Lamborghini', 'Mercedez', 'Jaguar', 'BMW'];
  
  return (
    <div>
      <ul className={styles.carlist}> {/* Wrap the list items inside a <ul> */}
        {cars.map((item, index) => {
          return <CarsName key={index} item={item}/>
        })}
      </ul>
    </div>
  );
};

export default Cars;
