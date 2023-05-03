import React, { useContext, useState } from "react";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import CartContext from "../context/Cart";
import CarritoStyle from "../css/Carrito.module.css";
const Carrito = function () {
  const [show, setShow] = useState(false);
  const { cart, actualizar, eliminar } = useContext(CartContext);
  return (
    <>
      <FaShoppingCart
        className={CarritoStyle.icon}
        onClick={() => setShow(!show)}
      />
      <section
        className={`${CarritoStyle.items} ${show ? CarritoStyle.active : ""}`}
      >
        {cart && cart.items.length > 0 ? (
          <ul>
            {cart.items.map(function (item) {
              return (
                <li key={item.id} className={CarritoStyle.view}>
                  <picture className={CarritoStyle.imgproduct}>
                    <img src={item.imagen} alt="" />
                  </picture>
                  <article className={CarritoStyle.detail}>
                    <h1> {item.name}</h1>
                    <h3>COP{item.precio}</h3>
                    <h3>Cantidad {item.cantidad}</h3>
                  </article>
                  <form
                    className={CarritoStyle.trash}
                    onSubmit={function (e) {
                      e.preventDefault();
                      eliminar(item.id);
                    }}
                  >
                    <button>
                      <FaTrashAlt title="Eliminar" />
                    </button>
                  </form>
                  <form
                    onSubmit={function (e) {
                      e.preventDefault();
                      actualizar(item.id);
                    }}
                  ></form>
                </li>
              );
            })}{" "}
            <li className={CarritoStyle.total}>
              <h3>Subtotal: COP: {cart.subtotal}.000</h3>
            </li>
          </ul>
        ) : (
          <h2 className={CarritoStyle.nohay}>No hay productos</h2>
        )}
      </section>
    </>
  );
};

export default Carrito;
