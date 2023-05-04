


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ForLogin from './componentes/FormLogin';



const App = () => {
  return (
    <>

      

      
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ForLogin />}/>
      </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
