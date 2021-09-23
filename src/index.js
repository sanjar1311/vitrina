import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './context';
import './index.css';
import App from './App';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />  
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);