import React from "react";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

function App() {

  
  return (
    <>
      <AppName />
      <div className="items">
      <AddTodo/>
     
       <div className="item1">
       <TodoItem1 />
       </div>
     
      <div className="item2">
      <TodoItem2 />
      </div>
     
      </div>
    </>
  );
}

export default App;
