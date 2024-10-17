import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>,
)