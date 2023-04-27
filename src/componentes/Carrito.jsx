import React, { useContext } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import CartContext from "../context/Cart";
import CarritoStyle from "../css/Carrito.module.css"
const Carrito = function () {
  const { cart, actualizar, eliminar } = useContext(CartContext);
  return (
    <>
      <FaShoppingCart className={CarritoStyle.icon} />
      <section className={CarritoStyle.items}>
        {cart && cart.items.length > 0 ? (
          <ul>
            {cart.items.map(function (item) {
              return (
                <li key={item.id}>
                  <h2>
                    {item.name} - COP{item.price}
                  </h2>
                  <form
                    onSubmit={function (e) {
                      e.preventDefault();
                      eliminar(item.id);
                    }}
                  >
                    <button>
                      <FaTimes />
                    </button>
                  </form>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2>No hay productos</h2>
        )}
      </section>
    </>
  );
};

export default Carrito;
