import NavbarStyle from "../css/Navbar.module.css";
import {FaShoppingCart} from "react-icons/fa";
const Navbar = () => {
  return (
  <section className={NavbarStyle.titulo}>
    <picture className={NavbarStyle.logo}>
      <img src="/imgs/01 logo.png" alt="Logo tejidos Chakana"/>
    </picture>
    <span className="iconmenu">
    <FaShoppingCart 
    title="Cart icon"
    className={NavbarStyle.cart}/>
    </span>
  </section>
  )
}

export default Navbar;