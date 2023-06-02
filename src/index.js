import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './utils/StateProvider';
import { initialState } from './utils/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>
);


