import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Si tienes un archivo de estilos
import 'bootstrap/dist/css/bootstrap.min.css';




// Busca el elemento root
const rootElement = document.getElementById('root');

// Usa createRoot en lugar de ReactDOM.render
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
