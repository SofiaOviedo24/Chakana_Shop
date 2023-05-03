import Navbar from "./componentes/Navbar";
import Main from "./componentes/Main"
import Productos from "./componentes/Productos";
import Detalle from "./componentes/Detalle";
import Footer from "./componentes/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Productos/>
      <Detalle/>
      <Footer/>
    </>
  );
};

export default App;
