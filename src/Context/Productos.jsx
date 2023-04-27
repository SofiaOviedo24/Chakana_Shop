import { createContext, useState } from "react";
import catalogoData from "../Data/productos";

const ProductosContext = createContext();
const ProductosProvider = function ({ children }) {
  const [productos, setproductos] = useState(catalogoData);
  const ProximoID = function () {
    if (productos.length == 0) {
      return 1;
    }
    return productos[productos.length - 1].id + 1;
  };
  const agregar = function ({ name, precio, descripcion, imagen, categoria }) {
    setproductos([
      ...productos,
      { id: ProximoID(), name, precio, descripcion, imagen, categoria },
    ]);
  };
  const eliminar = function(id){
    setproductos(
        [...productos].filter(function (producto) {return producto.id != id;
        })
  );
};

 return (
    <ProductosContext.Provider value={{catalogo: productos, agregar, eliminar}}>
        {children}
    </ProductosContext.Provider>
 );  
};

export {ProductosProvider};
export default ProductosContext;