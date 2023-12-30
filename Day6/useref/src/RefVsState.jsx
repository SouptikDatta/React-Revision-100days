import { useState, useRef } from "react";

const RefVsState = () => {
  const [count, setCount] = useState(0);
  let countRef = useRef(0);

  function handleClickRef() {
    // doesn't re-render the component!
    countRef.current = countRef.current + 1;
  }

  function handleClickState() {
    //re-render your component on every click
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClickRef}>
        You clicked {countRef.current} times using ref
      </button>
      <button onClick={handleClickState}>
        You clicked {count} times using state
      </button>
    </>
  );
}

export default RefVsState