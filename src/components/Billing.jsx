import { bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="oportunidade" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[70%] h-[90%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Não perca a oportunidade<br className="sm:block hidden" /> de mudar de vida!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Não deixe escapar a chance de transformar sua vida para melhor! Descubra como nossa mentoria pode abrir portas, desbloquear seu potencial e guiá-lo rumo ao sucesso. Aproveite esta oportunidade única e dê o primeiro passo em direção a uma vida melhor e mais realizada!
      </p>

      
    </div>
  </section>
);

export default Billing;
