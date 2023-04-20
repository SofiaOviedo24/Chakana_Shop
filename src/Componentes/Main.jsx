import MainStyle from "../css/Main.module.css";

const Main = () => {
  return (
    <section className={MainStyle.galeria}>
      <article className={MainStyle.left}>
        <picture className={MainStyle.pic1}>
          <img src="/imgs/06_P5.jpg" alt="Strap 06"/>
        </picture>
        <picture className={MainStyle.pic2}>
          <img src="/imgs/07_P6.jpg" alt="Strap 07"/>
        </picture>
        <picture className={MainStyle.pic3}>
          <img src="/imgs/08_P7.jpg" alt="Strap 08"/>
        </picture>
        <picture className={MainStyle.pic4}>
          <img src="/imgs/09_P8.jpg" alt="Strap 09"/>
        </picture>
        <picture className={MainStyle.pic5}>
          <img src="/imgs/10_P9.jpg" alt="Strap 10"/>
        </picture>

      </article>
      <article className={MainStyle.right}>
        <picture className={MainStyle.pic7}>
          <img src="/imgs/03_P2.jpg" alt="Strap 01" />
        </picture>

        <picture className={MainStyle.pic8}>
          <img src="/imgs/04_P3.jpg" alt="Strap 02" />
        </picture>

        <picture className={MainStyle.pic9}>
          <img src="/imgs/05_P4.jpg" alt="Strap 03" />
        </picture>

        <picture className={MainStyle.pic10}>
          <img src="/imgs/02_P1.jpg" alt="tejido carlos pizarro" />
        </picture>
      </article>
    </section>
  );
};

export default Main;
