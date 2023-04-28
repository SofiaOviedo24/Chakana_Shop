import React, { useContext, useState } from "react";
import DetalleStyle from "../css/Detalle.module.css";
import ProductoContext from "../context/Producto";
import CartContext from "../context/Cart";
import { RxCross1 } from "react-icons/rx";

const Detalle = function () {
  const { producto, setProducto } = useContext(ProductoContext);
  const { agregar } = useContext(CartContext);
  return (
    <>
      {producto == null ? null : (
        <section className={DetalleStyle.inicio}>
        <article className={DetalleStyle.contenedor}>
          <form 
            onSubmit={function () {
              setProducto(null);
            }}
          >
            <button>
              <RxCross1 title="Cerrar" />
            </button>
          </form>
          <h2>
            {producto.name}  
          </h2>
          <h3> COP{producto.precio} </h3>
          <p>{producto.descripcion}</p>
          <picture className={DetalleStyle.item}>
            <img src={producto.imagen} alt="" />
          </picture>
          <form
            onSubmit={function(event) {
              event.preventDefault()
              agregar(producto.id);
            }}
          >
            <button>agregar</button>
          </form>
        </article>
        </section>
      )}
    </>
  );
};

export default Detalle;
