import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/app';
import {AppProvider } from './context';


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App/>
    </AppProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);