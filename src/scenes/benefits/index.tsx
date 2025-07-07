import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Instalações de última geração",
    description:
      "Nossas instalações são meticulosamente projetadas para oferecer o que há de mais avançado em equipamentos e conforto para sua jornada fitness.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Centenas de aulas diversificadas",
    description:
      "Na nossa academia, a variedade é a chave para a sua motivação, você tem acesso a diversas modalidades.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Instrutores especializados e profissionais",
    description:
      "Você é guiado por instrutores especializados e profissionais altamente qualificados, verdadeiros parceiros na sua jornada de bem-estar.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MAIS DO QUE UMA ACADEMIA</HText>
          <p className="my-5 text-sm">
            Oferecemos equipamentos de ginástica, treinadores e aulas do melhor nível para
            levá-lo a atingir suas metas de condicionamento físico com facilidade. Oferecemos cuidado verdadeiro
            a cada um dos membros.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILHÕES DE MEMBROS FICANDO{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Aqui, você não está sozinho(a) na busca por uma vida mais saudável! 
                Somos o ponto de encontro de milhões de membros ficando FIT, uma comunidade vibrante e inspiradora que cresce a cada dia. 
                Pessoas como você, com objetivos e jornadas únicas, mas com a mesma paixão por superar limites e alcançar o bem-estar.
              </p>
              <p className="mb-5">
                Ao fazer parte da nossa academia, você se conecta a essa energia coletiva. 
                Celebramos cada conquista, oferecemos suporte e motivação, e construímos juntos um ambiente onde o seu sucesso é a nossa maior meta. 
                Venha fazer parte dessa legião de campeões e transforme seu corpo e sua mente!
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Junte-se Agora!
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
