import React, { useEffect, useState } from "react";

function Resource() {

    const [resource,setResource] = useState('posts');
    const [items ,setItems] = useState([]);

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(res => res.json())
            .then(data => setItems(data))
    },[resource])
  
  return (
    <>
        <div>
        <button onClick={()=> setResource('posts')}>Posts</button>
        <button onClick={()=> setResource('comments')}>Comments</button>
        <button onClick={()=> setResource('users')}>Users</button>
        </div>
        <h5>{resource}</h5>
        {items.map(item => <pre>{JSON.stringify(item)}</pre> )}
    </>
    
  );
}
export default Resource;