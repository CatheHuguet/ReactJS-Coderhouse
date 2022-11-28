import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(  // equivalente a llamar App(), la renderiza en el div root
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
)
