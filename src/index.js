 import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- Impor BrowserRouter
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- Bungkus App dengan BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);