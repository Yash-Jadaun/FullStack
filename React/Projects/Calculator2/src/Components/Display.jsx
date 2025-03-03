import React from "react";
import styles from "./Display.module.css";

const Display = ({displayValue}) => {

    

  return (
    <div className={styles.Container}>
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          value={displayValue}
          readOnly
        />
      </div>
    </div>
  );
};

export default Display;
