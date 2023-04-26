import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./Css/Reset.css"
import {ProductoProvider} from './Context/Producto';
import {ProductosProvider} from './Context/Productos';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductosProvider>
      <ProductoProvider>
    <App />
    </ProductoProvider>
    </ProductosProvider>
  </React.StrictMode>,
)
