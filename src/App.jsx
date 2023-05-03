<<<<<<< HEAD
import Navbar from "./componentes/Navbar";
import Main from "./componentes/Main"
import Productos from "./componentes/Productos";
import Detalle from "./componentes/Detalle";
import Footer from "./componentes/Footer";
=======
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ForLogin from './componentes/FormLogin';

>>>>>>> melendez

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Navbar />
      <Main />
      <Productos/>
      <Detalle/>
      <Footer/>
=======
      
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ForLogin />}/>
      </Routes>
      </BrowserRouter>
>>>>>>> melendez
    </>
  );
};

export default App;
