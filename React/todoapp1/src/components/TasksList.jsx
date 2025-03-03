import React from 'react'

const TasksList = ({tasks}) => {
  return (
    <div>
       <ul>
        {tasks.map((tasks,index)=>(
            <li key={index}>{tasks}</li>
        ))}
       </ul>
    </div>
  )
}

export default TasksList
