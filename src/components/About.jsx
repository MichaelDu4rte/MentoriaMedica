import { about} from "../assets";
import styles, { layout } from "../style";

const About = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={about} alt="About" className="w-[70%] h-[90%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Conheça Aryel Vieira<br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

      Dr. Aryel Vieira (CRM/RJ- 52.99415-4 | RQE 33576 | RQE 36940) é um médico com vasta experiência em gestão de saúde e liderança médica. Graduado em Medicina pela Faculdade de Medicina de Campos em 2013, iniciou sua carreira como Coordenador de serviços de saúde no Rio de Janeiro, antes de se tornar Diretor Clínico do SAMU em São Paulo, liderando uma equipe de 500 médicos. Possui especializações em Medicina Social e Administração em Saúde, e fundou uma rede de clínicas em Rondônia e Mato Grosso. Atualmente, dedica-se à consultoria em saúde e à valorização da classe médica através da educação.      </p>

      
    </div>
  </section>
);

export default About;
