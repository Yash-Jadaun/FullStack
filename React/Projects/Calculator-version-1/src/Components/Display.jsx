import React from "react";
import styles from "./Display.module.css";

const Display = () => {
  return (
    <div className={styles.display}> {/* Apply the custom CSS class from the module */}
      <div className="input-group input-group-lg">
       
        <input
          type="text"
          className="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
    </div>
  );
};

export default Display;
