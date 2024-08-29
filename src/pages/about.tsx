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
              Soy Samuel Ramírez Zúñiga, estudiante de Ingeniería Civil en
              Computación, especializado en el desarrollo de software y ciencia
              de datos. A lo largo de mi formación académica y experiencia
              profesional, he adquirido un conjunto sólido de habilidades
              técnicas en lenguajes y tecnologías clave como JavaScript,
              TypeScript, React, MongoDB y Python, que utilizo para crear
              soluciones innovadoras y eficientes.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, delay: 0.6 },
              }}
            >
              Mi experiencia como Asistente DTI en la Universidad de O’Higgins
              me ha permitido aplicar y expandir mis conocimientos técnicos en
              un entorno real. Además, mi trabajo como ayudante docente en
              programación Python ha fortalecido mi capacidad para desglosar
              problemas complejos y enseñar conceptos técnicos con claridad.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, delay: 1.1 },
              }}
            >
              Estoy particularmente interesado en el desarrollo de aplicaciones
              que integren grandes volúmenes de datos, utilizando técnicas de
              ciencia de datos para extraer insights valiosos y mejorar la toma
              de decisiones. Mi enfoque se basa en la combinación de un
              pensamiento analítico riguroso con una capacidad para innovar y
              adaptarme rápidamente a nuevas tecnologías.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, delay: 1.6 },
              }}
            >
              Mi objetivo es continuar desarrollándome como profesional en el
              campo del desarrollo de software y la ciencia de datos,
              contribuyendo a proyectos que requieran un enfoque técnico
              avanzado y un compromiso con la excelencia.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
