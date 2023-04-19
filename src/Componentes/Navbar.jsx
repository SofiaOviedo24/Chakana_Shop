import NavbarStyle from "../css/Navbar.module.css";
const Navbar = () => {
  return (
  <section className={NavbarStyle.titulo}>
    <picture className={NavbarStyle.logo}>
      <img src="/imgs/01 logo.png" alt="Logo tejidos Chakana"/>
    </picture>
  </section>
  )
}

export default Navbar;