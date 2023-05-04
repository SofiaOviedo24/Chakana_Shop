import Navbar from "./componentes/Navbar";
import Main from "./componentes/Main";
import Productos from "./componentes/Productos";
import Detalle from "./componentes/Detalle";
import Footer from "./componentes/Footer";
import ForLogin from "./componentes/FormLogin";

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Productos />
      <Detalle />
      <ForLogin />
      <Footer />
    </>
  );
};

export default App;
