               //Updating Objects in State

import React, { useState } from 'react'

const Advance = () => {

  const [state,setState] = useState({count: 4 , theme : 'Blue'});  
  const count = state.count;
  const theme = state.theme;

  function decrementCount() {
    setState(prevState =>{
      return {...prevState, count: prevState.count - 1}         //using Spread Operators
    })
  }

  function incrementCount() {
    setState(prevState =>{
      return {...prevState, count: prevState.count + 1}
    })
  }
  

  return (
    <>
      <h1>Advanced</h1>
      <button onClick={incrementCount}>+</button>
      <span>@ Count = {count} @Theme {theme}</span>
      <button onClick={decrementCount}>-</button>
    </>
  )
}

export default Advance