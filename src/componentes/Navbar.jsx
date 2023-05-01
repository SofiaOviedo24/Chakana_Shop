import NavbarStyle from "../css/Navbar.module.css";
import { FaUserAlt } from "react-icons/fa";
import Carrito from "./Carrito";


const Navbar = (props) => {
  return (
    <section className={NavbarStyle.titulo}>
      <picture className={NavbarStyle.logo}>
        <img src="/imgs/01 logo.png" alt="Logo tejidos Chakana" />
      </picture>
      <span className={NavbarStyle.iconmenu}>
      <span className={NavbarStyle.usuario}>{props.usuario} </span>
        <FaUserAlt title="User icon" className={NavbarStyle.user} />
        <Carrito/>
      </span>
    </section>
  );
};

export default Navbar;
