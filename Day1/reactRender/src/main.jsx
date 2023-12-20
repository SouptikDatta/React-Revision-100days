import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'


//TO UNDERSTAND THE REACT JSX , GO TO THE OFFICIAL DOCUMENTATION OF FACEBOOK/REACT GITHUB
//https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js

//   First Method
// const firstELement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const secondElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)


const thirdElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    secondElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
  thirdElement
  
)