import React from 'react'



const Greeting=()=>{
    return console.log("Hello everybody")
}









const ItemsChild = ({ item,Greeting }) => { // Changed `Items` to `item` to follow camelCase convention
  return (
    <div>
      <li>{item}</li> {/* Display the item */}
      <button onClick={Greeting}>Buy</button>


    </div>
  )
}

export default ItemsChild
