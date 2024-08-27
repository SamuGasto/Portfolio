import { Analisis, esAnalisis } from "@/data/proyectos/analisis/analisis";
import { Aplicacion } from "@/data/proyectos/apps/apps";
import { motion } from "framer-motion";
import SeccionPreguntas from "./seccion-preguntas";
import SeccionTecnologias from "./seccion-tecnologias";
import CarruselImagenes from "./carrusel-imagenes";
import Descripcion from "./descripcion-proyecto";
import Titulo from "./titulo-proyecto";

interface PropType {
  info: Analisis | Aplicacion;
}

export default function VistaProyecto(props: PropType) {
  const { info } = props;

  return (
    <motion.div
      className="flex flex-col text-center justify-center gap-10 py-4 md:py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      {Titulo(info)}
      <hr />
      {Descripcion(info)}
      <hr />
      <CarruselImagenes info={info} />
      <hr />
      <section className="w-5/6 md:w-4/6 lg:w-5/6 self-center">
        {esAnalisis(info) ? (
          <SeccionPreguntas info={info} />
        ) : (
          <SeccionTecnologias info={info} />
        )}
      </section>
    </motion.div>
  );
}
