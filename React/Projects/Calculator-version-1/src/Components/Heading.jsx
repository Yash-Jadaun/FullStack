import React from 'react';
import styles from "./Heading.module.css"; // Import styles from the CSS module

const Heading = () => {
  return (
    <div className={styles.heading}> {/* Use styles.heading here */}
      <h1>CALCULATOR</h1>
    </div>
  );
};

export default Heading;
