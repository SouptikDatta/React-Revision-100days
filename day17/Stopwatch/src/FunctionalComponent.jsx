import { useEffect, useRef, useState } from 'react'
import './App.css'

function FunctionalComponent() {
  
  //initalizing a counter ref
  const counterRef = useRef(null);

  const [count, setCount] = useState(0);

  //start function clearing the prev ref first to handle multi-click
  function handleStart() {
    clearInterval(counterRef.current);
    counterRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }

  // clearing the timer function
  function handleStop() {
    clearInterval(counterRef.current);
  }

  //// clearing the timer function and reset it to 0
  function handleReset() {
    clearInterval(counterRef.current);
    setCount(0);
  }

  // this is for when you unmount the component if the timer is still running to prevent memory leaks
  useEffect(() => {
    return () => {
      clearInterval(counterRef.current);
    };
  }, []);

  return (
    <>
      <h1>Stopwatch</h1>
      <h2>Timer : {count} sec</h2>
      <div className='card'>
          <button className="btn start" onClick={handleStart}>Start</button>
          <button className="btn stop" onClick={handleStop}>Stop</button>
          <button className="btn reset" onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default FunctionalComponent