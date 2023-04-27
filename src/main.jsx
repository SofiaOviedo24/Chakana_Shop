import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Css/Reset.css";
import { ProductoProvider } from "./context/Producto";
import { ProductosProvider } from "./context/Productos";
import { CartProvider } from "./context/Cart";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductosProvider>
      <ProductoProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductoProvider>
    </ProductosProvider>
  </React.StrictMode>
);
