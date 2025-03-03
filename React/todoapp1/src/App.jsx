import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/Display'
import TasksList from './components/TasksList'
import Heading from './components/Heading'
// import Buttons from './components/Buttons'
 

import React from 'react'
import { Button } from 'bootstrap'

const App = () => {

  const [currTask, setCurrTask] = useState(""); 
  const [taskList, setTaskList] = useState([]);
 
 const handleInputChange = (event)=>{
   setCurrTask(event.target.value);
 }

  const handleAddTask =()=>{
    setTaskList([...taskList,currTask]);
    setCurrTask("");
  }










  return (
    <div>
      <Heading></Heading>
     <Display
         currTask={currTask}
         onInputChange={handleInputChange}
         onAddTask={handleAddTask}
       ></Display>
     {/* <Buttons></Buttons> */}
     <TasksList tasks={taskList}></TasksList>

   
    </div>
  )
}

export default App
