import React, { useEffect, useState } from 'react'

const Window = () => {
    
    const [windowWidth , setWindowWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        //clear function
        return () => {
            window.removeEventListener('resize', handleResize)                          
        }
    }, [])

  return (
    <div>Window Widht : {windowWidth}</div>
  )
}
export default Window