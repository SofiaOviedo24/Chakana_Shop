import FooterStyle from "../css/Footer.module.css";
import { TiSocialInstagram} from "react-icons/ti";


const Footer = () => {
 return (

  
<section className={FooterStyle.ctc}>

  <h2 className={FooterStyle.contact}>!Trabajemos Juntos!</h2>
      <form action="#" method="post" className={FooterStyle.newsletter}>
        <input type="E-mail" placeholder="E-mail" id="E-mail" name="E-mail" />
        <button type="submit">
        <TiSocialInstagram title="Instagram icon"  />
        </button>
        <input
          type="Mensaje"
          placeholder="Mensaje"
          id="Mensaje"
          name="Mensaje"
          />
        <button type="submit"></button>
      </form>



      <article className={FooterStyle.contact2}>
        <h3>Tejidos Chakana</h3>
        <h4>Bogotá DC. - Colombia</h4>
        <nav>
          <a href="https://www.instagram.com/tejidoschakana/" target="blank">
          <TiSocialInstagram title="Instagram icon" className={FooterStyle.ig} />
          </a>
        </nav>
      </article>

</section>

 );
};

export default Footer;