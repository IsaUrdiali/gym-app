import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Aulas de musculação",
    description:
      "Nossas aulas de musculação são a base para quem busca construir força, tonificar o corpo e alcançar resultados duradouros.",
    image: image1,
  },
  {
    name: "Aulas de Yoga",
    image: image2,
  },
  {
    name: "Aulas de foco abdominal",
    description:
      "Conquiste um abdômen mais forte e definido com as nossas aulas de foco abdominal! Desenvolvidas para trabalhar intensamente a região do core.",
    image: image3,
  },
  {
    name: "Aulas Divertidas",
    description:
      "Quem disse que treinar precisa ser monótono? Nossas aulas divertidas foram criadas para transformar sua rotina de exercícios em momentos de pura energia e alegria! Aqui, cada aula é uma experiência única, pensada para que você se exercite, aprenda e se divirta ao máximo.",
    image: image4,
  },
  {
    name: "Aulas Fitness",
    image: image5,
  },
  {
    name: "Aulas de treinamento",
    description:
      "Nossas aulas de treinamento são a oportunidade perfeita para você elevar seu desempenho e alcançar resultados que jamais imaginou. Com uma metodologia dinâmica e focada em resultados, cada sessão é desenhada para desafiar seu corpo e mente, sempre sob a supervisão atenta de nossos instrutores especializados e profissionais.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>NOSSAS AULAS</HText>
            <p className="py-5">
              Na nossa academia, a diversidade e a qualidade são o coração da sua experiência fitness!
              Com uma grade repleta de centenas de aulas diversificadas, você tem a liberdade de escolher o treino que mais combina com seus objetivos, nível de energia e paixões.
              Seja qual for seu foco, temos a aula certa para você!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
