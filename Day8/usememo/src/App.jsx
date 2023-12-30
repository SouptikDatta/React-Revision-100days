import { useEffect, useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  //UseMemo hook to cache the previous number value 
  const doubleNumber = useMemo(()=>{
    return slowFunction(number)
  }, [number])
  
  const theme = useMemo(()=>{
    return {
      backgroundColor : dark? 'black' : 'white',
      color : dark? 'white' : 'black'
    }
  }, [dark])

  useEffect( () =>{
      console.log("Theme Changed !!")
  },[theme])

  //Slow function which we need to store as Cache
  function slowFunction(number){
      for(let i = 0; i <1000000000; i++) {}  //delaying the execution
      return number * 2;
  }

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
      <button onClick={()=> setDark(prevDark => ! prevDark)}>Change Theme</button>
      <div style={theme}>{doubleNumber}</div>
    </>
  );
}

export default App;