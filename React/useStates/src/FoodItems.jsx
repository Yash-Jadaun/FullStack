import React from 'react'
import { useState } from 'react'

















const FoodItems = () => {

  const [food,setFood] = useState(['Burger','Pizza','IceCream']);
  const [newFood,setNewFood] = useState('');

  const addFood = () =>{
    if(newFood){
        setFood([...food,newFood]);
        setNewFood('');
    }
  }








  return (
    <div>
      
    </div>
  )
}

export default FoodItems
