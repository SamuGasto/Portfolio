import { Analisis, esAnalisis } from "@/data/analisis/analisis";
import { Aplicacion } from "@/data/apps/apps";
import { motion } from "framer-motion";
import { subtitle, title } from "../primitives";
import SeccionPreguntas from "./seccionPreguntas";
import SeccionTecnologias from "./seccionTecnologias";

interface PropType {
  info: Analisis | Aplicacion;
}

export default function VistaProyecto(props: PropType) {
  const { info } = props;
  return (
    <motion.div
      className="flex flex-col text-center justify-center gap-10 py-8 md:py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <section>
        <h1 className={title()}>{info.nombre}</h1>
        <h1 className={subtitle()}>{info.desc}</h1>
      </section>
      <hr />

      <hr />
      <section className="w-5/6 md:w-4/6 lg:w-3/6 self-center">
        {esAnalisis(info) ? (
          <SeccionPreguntas info={info} />
        ) : (
          <SeccionTecnologias info={info} />
        )}
      </section>
    </motion.div>
  );
}
