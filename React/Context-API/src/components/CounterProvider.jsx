


import React from 'react'
import CounterContext from './CounterContext';

const CounterProvider = ({children}) => {
   const [count,setCount]=useState(0);

   const increment = () => setCount(count+1);
   const decrement = () => setCount(count-1);


 
 
 
 
 
 
    return (
    <div>
      <CounterContext.Provider value={{count,increment,decrement}}>
        {children}
      </CounterContext.Provider>
    </div>
  )
}

export default CounterProvider
