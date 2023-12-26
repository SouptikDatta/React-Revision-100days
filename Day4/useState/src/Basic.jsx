import React, { useState } from 'react'

// function countInitial(){
//   console.log('countInitial function called with value 4')        
//   return 4
// }

const Basic = () => {

    const [count,setCount] = useState(0)
    // const [count,setCount] = useState(() => countInitial())    //count value starting from 4 when countInitial function is called

    function decrementCount() {
        // setCount(count - 1)             //rewrite this line multiple times but only decrement once 
        
        setCount(prevCount => prevCount - 1)
        setCount(prevCount => prevCount - 1)        //rewriting this line multiple times will affect
    }

    function incrementCount() {
        // setCount(count + 1)
        
        setCount(prevCount => prevCount + 1) 
        setCount(prevCount => prevCount + 1)        //rewriting this line multiple times will affect
    }

  return (
    <>
        <h1>Basic</h1>
        <button onClick={incrementCount}>+</button>
        <span>{count}</span>
        <button onClick={decrementCount}>-</button>
    </>
  )
}
export default Basic