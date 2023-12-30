import React, { useRef } from 'react'

const Focus = () => {

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
      }
    return (
        <div>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
  )
}

export default Focus

/* 
  we use the ref property on the input element to set the current value of inputRef 
  to the input element. Now when we click the button it will call focusInput 
  which uses the current value of the inputRef variable to set the focus on the input element.
*/