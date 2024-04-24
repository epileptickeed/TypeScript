import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MainContext } from '../context/MainContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </React.StrictMode>,
)
