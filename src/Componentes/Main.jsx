import MainStyle from "../css/Main.module.css";

const Main = () => {
  return (
    <section className={MainStyle.galeria}>
      <article className={MainStyle.right}>
        <picture>
          <img src="/imgs/03_P2.jpg" alt="Strap 01" />
        </picture>

        <picture>
          <img src="/imgs/04_P3.jpg" alt="Strap 02" />
        </picture>

        <picture>
          <img src="/imgs/05_P4.jpg" alt="Strap 03" />
        </picture>

        <picture>
          <img src="/imgs/02_P1.jpg" alt="tejido carlos pizarro" />
        </picture>
      </article>
    </section>
  );
};

export default Main;
