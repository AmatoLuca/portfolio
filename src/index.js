import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import NavMenuProvider from './contexts/NavMenuContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavMenuProvider>
      <App />
    </NavMenuProvider>
  </React.StrictMode>
);

// preferisco incorporare il provider in index anzichè nella header
// perchè potrebbe servirmi lo stato del toggle per azionare animazioni
// in altri punti della app.