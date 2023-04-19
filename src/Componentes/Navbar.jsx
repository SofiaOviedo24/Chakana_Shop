import NavbarStyle from "../css/Navbar.module.css";
import {FaShoppingCart} from "react-icons/fa";
const Navbar = () => {
  return (
  <section className={NavbarStyle.titulo}>
    <picture className={NavbarStyle.logo}>
      <img src="/imgs/01 logo.png" alt="Logo tejidos Chakana"/>
    </picture>
    <FaShoppingCart/>
  </section>
  )
}

export default Navbar;