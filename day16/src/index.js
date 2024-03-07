import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Effects from './Effects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <Effects/>
    </div>
  </React.StrictMode>
);