import React, { useContext } from "react";
import ProductoContext from "../context/Producto";
import CartContext from "../context/Cart";

const Detalle = function () {
  const { producto, setProducto } = useContext(ProductoContext);
  const { agregar } = useContext(CartContext);
  return (
    <>
      {producto == null ? null : (
        <article>
          <form
            onSubmit={function () {
              setProducto(null);
            }}
          >
            <button>cerrar</button>
          </form>
          <h2>
            {producto.name} - U$D{producto.precio}
          </h2>
          <p>{producto.descripcion}</p>
          <picture>
            <img src={producto.imagen} alt="" />
          </picture>
          <form
            onSubmit={function () {
              agregar(producto.id);
            }}
          >
            <button>agregar</button>
          </form>
        </article>
      )}
    </>
  );
};

export default Detalle;
