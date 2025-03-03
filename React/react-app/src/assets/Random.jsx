import React from 'react'

const Random = () => {
    let number = Math.random() * 100;
  return (
    
    <div>
      <h1 style={{'background-color':'red'}}>Random number is : {number}</h1>
    </div>
  )
}

export default Random
