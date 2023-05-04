<<<<<<< HEAD



import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ForLogin from './componentes/FormLogin';


=======
import Navbar from "./componentes/Navbar";
import Main from "./componentes/Main";
import Productos from "./componentes/Productos";
import Detalle from "./componentes/Detalle";
import Footer from "./componentes/Footer";
import ForLogin from "./componentes/FormLogin";
>>>>>>> 7244ab8d2691611cb9bef7a2b58b98a0b2ea5992

const App = () => {
  return (
    <>
<<<<<<< HEAD

      

      
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ForLogin />}/>
      </Routes>
      </BrowserRouter>

=======
      <Navbar />
      <Main />
      <Productos />
      <Detalle />
      <ForLogin />
      <Footer />
>>>>>>> 7244ab8d2691611cb9bef7a2b58b98a0b2ea5992
    </>
  );
};

export default App;
