import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center py-2 md:py-4">
        <motion.div
          className="max-w-xl text-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h1
            className={
              title({ color: "blue" }) +
              " " +
              "font-PlaywriteDKUloopet flex flex-col"
            }
          >
            Sobre mi
          </h1>
          <div className="flex flex-col text-left gap-5 mt-6">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, delay: 0.1 },
              }}
            >
              Hola, soy Samuel Ramírez Zúñiga, un estudiante de Ingeniería Civil
              en Computación en la Universidad de O’Higgins. A lo largo de mi
              carrera, he podido desarrollar un fuerte compromiso con el
              aprendizaje y el trabajo en equipo.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, delay: 0.6 },
              }}
            >
              Mis competencias técnicas abarcan una variedad de lenguajes y
              herramientas, incluyendo el desarrollo de aplicaciones
              web/moviles/escritorio, así como habilidades avanzadas en soporte
              técnico. En mi experiencia como asistente DTI, brindé soporte
              técnico en la universidad, manejando desde la actualización de
              software hasta la reparación de impresoras.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, delay: 1.1 },
              }}
            >
              Mi enfoque se centra en el autoaprendizaje, la curiosidad y la
              creatividad, siempre buscando nuevas formas de aplicar mis
              conocimientos para resolver problemas y crear soluciones. Además,
              disfruto de leer, cocinar, enseñar y practicar música, actividades
              que me ayudan a seguir desarrollando mi creatividad.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, delay: 1.6 },
              }}
            >
              Estoy buscando oportunidades para aplicar mis habilidades y
              conocimientos en un entorno profesional, donde pueda contribuir al
              éxito de proyectos innovadores y continuar creciendo en mi
              carrera. Si estás buscando a alguien con una fuerte ética de
              trabajo, habilidades técnicas sólidas y una pasión por la
              tecnología, no dudes en contactarme.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
