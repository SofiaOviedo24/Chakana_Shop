import NavbarStyle from "../css/Navbar.module.css";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <section className={NavbarStyle.titulo}>
      <picture className={NavbarStyle.logo}>
        <img src="/imgs/01 logo.png" alt="Logo tejidos Chakana" />
      </picture>
      <span className={NavbarStyle.iconmenu}>
        <FaUserAlt title="User icon" className={NavbarStyle.user} />
        <FaShoppingCart title="Cart icon" className={NavbarStyle.cart} />
      </span>
    </section>
  );
};

export default Navbar;
