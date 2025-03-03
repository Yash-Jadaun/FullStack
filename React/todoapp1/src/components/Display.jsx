import React from "react";
import styles from "./Display.module.css"; // Ensure the correct relative path
import Buttons from "./Buttons";

const Display = ({currTask, onInputChange, onAddTask }) => {
  return (
    <div className={styles.Display}>
        <input
        type="text"
        className="form-control"
        aria-label="Task input"
        value={currTask} // Bind input value to state
        onChange={onInputChange} // Handle input change
      />

        <button
        type="button"
        className="btn btn-primary"
        onClick={onAddTask} // Handle adding task
      >
        Add Task
      </button>

    </div>
  );
};

export default Display;
