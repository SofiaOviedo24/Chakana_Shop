import ProductosStyle from "../css/Productos.module.css";
import React, { useContext } from "react";
import ProductosContext from "../context/Productos";
import ProductoContext from "../context/Producto";
import { FaShoppingCart } from "react-icons/fa";

const Productos = function () {
  const { setProducto } = useContext(ProductoContext);
  const { catalogo } = useContext(ProductosContext);
  return (
    <section className={ProductosStyle.galeria}>
      <ul className={ProductosStyle.galeriaproductos}>
        {catalogo.map((producto) => (
          <li
            key={producto.id}
            onClick={function () {
              setProducto(producto);
            }}
          >
            <picture className={ProductosStyle.imgn}>
              <img src={producto.imagen} alt="" />
            </picture>
            <h1 className={ProductosStyle.galeriainfo}>
              {producto.name}
              <br></br>
              <h2 className={ProductosStyle.info}>$ {producto.precio} COP</h2>
              <button className={ProductosStyle.Botonagregar}>
                AGREGAR
                <span>
                  <FaShoppingCart title="Carticon" />
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
