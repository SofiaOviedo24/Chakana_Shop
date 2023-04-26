import React, { useContext } from "react";
import ProductosContext from "../Context/Productos";
import ProductoContext from "../Context/Producto";

const Productos = function () {
  const { producto, setProducto } = useContext(ProductoContext);
  const { productos } = useContext(ProductosContext);
  return (
    <section>
      <ul>
        {productos.map((producto) =>(
          <li key={producto.id}
          onClick={function(){
            setProducto(producto)
          }}
          >
          <picture>
              <img src={producto.imagen} alt=""/>
          </picture>
            <h3>{producto.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
  };

export default Productos;