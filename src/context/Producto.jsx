import { createContext, useState } from "react";

const ProductoContext = createContext(null);

const ProductoProvider = function ({ children }) {
  const [producto, setProducto] = useState(null);
  return (
    <ProductoContext.Provider value={{producto, setProducto}}>
      {children}
    </ProductoContext.Provider>
  );
};

export {ProductoProvider};
export default ProductoContext;
