import styles from "../style";
import { robot } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Desperte <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Seu potencial</span>{" "}
          </h1>
          
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          para o Sucesso
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Alcance seus objetivos, supere desafios e libere seu potencial máximo. Junte-se a nós nesta jornada de crescimento pessoal e profissional. Alcance novos patamares e construa o futuro que você merece. Vamos transformar sonhos em realidade, juntos! Seja guiado por Aryel Vieira, médico e formado pela Faculdade de Medicina de Campos
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[80%] h-[80%] relative z-[5] rounded-lg" />

       
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        
      </div>

      
    </section>
  );
};

export default Hero;
