import ProductosStyle from "../css/Productos.module.css";
import React, { useContext } from "react";
import ProductosContext from "../context/Productos";
import ProductoContext from "../context/Producto";
import { GoEye } from "react-icons/go";

const Productos = function () {
  const { setProducto } = useContext(ProductoContext);
  const { catalogo } = useContext(ProductosContext);
  return (
    <section className={ProductosStyle.galeria}>
      <ul className={ProductosStyle.galeriaproductos}>
        {catalogo.map((producto) => (
          <li>
            <picture className={ProductosStyle.imgn}>
              <img src={producto.imagen} alt="" />
            </picture>
            <h1 className={ProductosStyle.galeriainfo}>
              {producto.name}
              <br></br>
              <h2 className={ProductosStyle.info}>$ {producto.precio} COP</h2>
              <button
                className={ProductosStyle.Botonagregar}
                key={producto.id}
                onClick={function () {
                  setProducto(producto);
                }}>
                Ver más
                <span>
                  <GoEye title="eye" />
                </span>
              </button>
            </h1>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Productos;
