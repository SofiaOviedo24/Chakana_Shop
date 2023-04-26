import React, { useContext } from "react";
import ProductosContext from "../Context/Productos";
import ProductoContext from "../Context/Producto";

const Productos = function () {
  const { setProducto } = useContext(ProductoContext);
  const { catalogo } = useContext(ProductosContext);
  return (
    <section>
      <ul>
        {catalogo.map((producto) => (
          <li
          key={producto.id}
            
          >
            <picture>
              <img src={producto.imagen} alt="" />
            </picture>
            <h1>
              {producto.name}COP{producto.precio}
              <form onSubmit={function (e) {
              e.preventDefault() 
              setProducto(producto);
            }}>
              <button>Ver mas</button>
            </form>
            </h1>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Productos;
