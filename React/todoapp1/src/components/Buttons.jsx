import React from 'react'

const Buttons = ({handleButtonClick}) => {
  return (
    <div>
       <button 
        handleButtonClick={handleButtonClick}
        type="button"
        className="btn btn-primary"
        id="add-task-button"
      >
        Add Task
      </button>
    </div>
  )
}

export default Buttons
