import NavbarStyle from "../css/Navbar.module.css";
import { FaUserAlt } from "react-icons/fa";
import Carrito from "./Carrito";



const Navbar = (props) => {

  function SerrarSesion (){
    document.getElementById("forma").style.display = "block";
    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";
    document.getElementById("usuario").focus();
    window.location.replace('');
    document.getElementById("Navbar").style.display = "none";
    document.getElementById("Main").style.display = "none";
    document.getElementById("Productos").style.display = "none";
    document.getElementById("Detalles").style.display = "none";
    
 

    
  }

  return (
    <section id="Navbar" className={NavbarStyle.titulo}>
      <picture className={NavbarStyle.logo}>
        <img src="/imgs/01 logo.png" alt="Logo tejidos Chakana" />
      </picture>
      <span className={NavbarStyle.iconmenu}>
      
      

      
      <button onClick={SerrarSesion} >Serrar Sesion</button>
      <span className={NavbarStyle.usuario}>{props.usuario} </span>
        <FaUserAlt title="User icon" className={NavbarStyle.user} />
        <Carrito/>
      </span>
    </section>
  );
};

export default Navbar;
