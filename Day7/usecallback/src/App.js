import { useCallback, useState } from "react";
import List from "./List";

function App() {
  const [num, setNum] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback(() => {
    return [num , num + 1, num + 2]
  },[num])

  const theme = {
    backgroundColor : dark ? '#333' : '#FFF',
    color : dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
      <input type="number" value={num} 
      onChange={e =>setNum(parseInt(e.target.value))}/>

      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle Theme</button>
      
      <List getItems={getItems}/>
    </div>
  );
}

export default App;
