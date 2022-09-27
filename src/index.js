import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { BrowserRoute, BrowserRouter } from 'react-router-dom'
=======
import { BrowserRouter } from 'react-router-dom'
>>>>>>> cec900f (corrected spelling browserrouter)
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter> 
  </React.StrictMode>
);

