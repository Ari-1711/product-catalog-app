import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // CSS global dasar
import App from './App';
// import reportWebVitals from './reportWebVitals'; // Opsional, untuk mengukur performa

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Jika Anda ingin mulai mengukur performa di aplikasi Anda, Anda bisa
// meng-uncomment baris reportWebVitals dan mengimpornya.
// Contoh: reportWebVitals(console.log);
// atau kirim ke endpoint analitik. Pelajari lebih lanjut: https://bit.ly/CRA-vitals
// reportWebVitals();