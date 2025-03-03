import React from 'react';
import ItemsChild from './ItemsChild';
import styles from './Items.module.css'; // Import the CSS module

const Items = () => {
  const food = ['burger', 'pizza', 'icecream'];

  return (
    <div className={styles.container}> {/* Apply the container class */}
      <ul>
        {food.map((item, index) => {
          return <ItemsChild key={index} item={item} />;
          
        })}
       
      </ul>
    </div>
  );
}

export default Items;
