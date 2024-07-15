import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GalleryContextProvider from './Context/GalleryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GalleryContextProvider>
     <App />
  </GalleryContextProvider>
);
