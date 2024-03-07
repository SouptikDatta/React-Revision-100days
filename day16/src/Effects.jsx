import React, { useState, useLayoutEffect, useEffect } from "react";


const Effects = () => {
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    if (num === 0) setNum(5 + Math.random() * 50);
  }, [num]);
  console.log("🚀useLayoutEffect ~ num", num);

  useEffect(() => {
    if (num === 0) setNum(5 + Math.random() * 50);
  }, [num]);
  console.log("🚀useEffect ~ num", num);

  return (
    <>
        <h2>{num}</h2>
        <button className="btn" onClick={() => setNum(0)}>Button</button>
        <h3>useLayoutEffect</h3>
    </>
  );
};

export default Effects;