import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './contexts';

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
