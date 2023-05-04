import React, { useContext, useState } from "react";
import DetalleStyle from "../css/Detalle.module.css";
import ProductoContext from "../context/Producto";
import CartContext from "../context/Cart";
import { FaShoppingCart} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Detalle = function () {
  const { producto, setProducto } = useContext(ProductoContext);
  const { agregar} = useContext(CartContext);
  return (
    <>
      {producto == null ? null : (

        <section className={DetalleStyle.inicio}>
        <span className={DetalleStyle.contenedor}>
          <form className={DetalleStyle.cerrar}

        <section id="Detalle" className={DetalleStyle.inicio}>
          <article className={DetalleStyle.contenedor}>
            <form 
>>>>>>> melendez
              onSubmit={function () {
                setProducto(null);
              }}
            >
              <button>
                <RxCross1  title="Cerrar" className={DetalleStyle.x}/>
              </button>
            </form>
            <picture className={DetalleStyle.item}>
              <img src={producto.imagen} alt="" />
            </picture>
            <article className={DetalleStyle.info}>
            <h1>
              {producto.name}  
            </h1>
            <h2> Descripción: </h2>
            <p>{producto.descripcion}</p>
            <h3> Precio </h3>
            <h4> ${producto.precio} </h4>
            </article>
          </span>
            
            <form className={DetalleStyle.boton}
              onSubmit={function(event) {
                event.preventDefault()
                agregar(producto.id);
              }}
            >
              <button> AGREGAR <span><FaShoppingCart title="carrito" /></span></button>
            </form>
        </section>
      )}
    </>
  )
}

export default Detalle;
