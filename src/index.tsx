import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Fonts/Poppins-SemiBold.ttf'
import './Fonts/Poppins-Medium.ttf'
import './Fonts/Poppins-Light.ttf'
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);
