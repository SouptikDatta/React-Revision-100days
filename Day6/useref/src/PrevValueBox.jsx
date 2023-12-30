import React, { useEffect, useRef, useState } from 'react'

const PrevValueBox = () => {

    const [name, setName] = useState('');
    const prevName = useRef('');

    useEffect(()=>{
        prevName.current = name;
    },[name])

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <h3>My name is {name} and it used to be {prevName.current}</h3>
        </div>
  )
}

export default PrevValueBox

/*
    Refs can also be used for any form of storage that is persisted across component renders. 
    A very common use case for this would be storing the previous value of a state variable.
*/