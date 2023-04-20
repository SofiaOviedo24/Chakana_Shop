import MainStyle from "../css/Main.module.css";

const Main = () => {
 return(

<section className={MainStyle.galeria}>

  <picture className={MainStyle.p1}>
   <img src="/imgs/02_P1.jpg" alt="tabloide carloz pizarro" />
  </picture>

<article className={MainStyle.grid3}>

  <picture className={MainStyle.p2}>
   <img src="/imgs/03_P2.jpg" alt="strap 1" />
  </picture>

  <picture className={MainStyle.p3}>
   <img src="/imgs/04_P3.jpg" alt="strap 2" />
  </picture>

  <picture className={MainStyle.p4}>
   <img src="/imgs/05_P4.jpg" alt="strap 3" />
  </picture>

</article >

<article className={MainStyle.grid1}>

  <picture className={MainStyle.p5}>
   <img src="/imgs/06_P5.jpg" alt="strap 4" />
  </picture>

  <picture className={MainStyle.p6}>
   <img src="/imgs/07_P6.jpg" alt="model 1" />
  </picture>

</article>

</section>

 )
}

export default Main;