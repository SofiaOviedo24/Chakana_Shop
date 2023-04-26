import MainStyle from "../css/Main.module.css";

const Main = () => {
  return (
    <section>
      <section className={MainStyle.galeria}>
          <picture className={MainStyle.pic1}>
            <img src="/imgs/06_P5.jpg" alt="Strap 06" />
          </picture>
          <picture className={MainStyle.pic2}>
            <img src="/imgs/07_P6.jpg" alt="Strap 07" />
          </picture>
          <picture className={MainStyle.pic3}>
            <img src="/imgs/08_P7.jpg" alt="Strap 08" />
          </picture>
          <picture className={MainStyle.pic4}>
            <img src="/imgs/09_P8.jpg" alt="Strap 09" />
          </picture>
          <picture className={MainStyle.pic5}>
            <img src="/imgs/10_P9.jpg" alt="Strap 10" />
          </picture>
          <picture className={MainStyle.pic7}>
            <img src="/imgs/03_P2.jpg" alt="Strap 01" />
          </picture>
          <picture className={MainStyle.pic8}>
            <img src="/imgs/04_P3.jpg" alt="Strap 02" />
          </picture>
          <picture className={MainStyle.pic9}>
            <img src="/imgs/05_P4.jpg" alt="Strap 03" />
          </picture>
          <picture className={MainStyle.pic11}>
            <img src="/imgs/11_P10.jpg" alt="Strap 03" />
          </picture>

          <picture className={MainStyle.pic10}>
            <img src="/imgs/02_P1.jpg" alt="tejido carlos pizarro" className={MainStyle.img} />
            <p className={MainStyle.texto}>
            Carlos Pizarro León Gómez:
            Político y guerrillero cartagenero, máximo comandante del grupo Movimiento 19 de abril (M-19), entre 1986 y 1990. Adelantó estudios en Derecho en la Universidad Javeriana y en la Universidad Nacional de Colombia, pero no los culminó –de la primera institución fue expulsado por participar en una huelga-.
            Militó en las Juventudes Comunistas de Colombia (JUCO) y en 1972 se vinculó a las FARC-EP, al que estuvo adscrito durante un año. Con algunos de sus compañeros que también desertaron del grupo armado fundaron el M-19 en 1974, bajo el ideal de una guerrilla urbana, intelectual, nacionalista y social democrática.
            </p>
          </picture>


      </section>
      <span className={MainStyle.catalogo}>
        <button>C A T A L O G O</button>
      </span>
    </section>
    
  );
};

export default Main;
