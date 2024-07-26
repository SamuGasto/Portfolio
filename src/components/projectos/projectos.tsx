import { title } from "@/components/primitives";
import { Tab, Tabs } from "@nextui-org/tabs";
import ProyectosAnalisis from "@/data/analisis/analisis";
import { motion } from "framer-motion";
import Tarjeta from "./tarjetas";

export default function Proyectos() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Proyectos</h1>
      </div>
      <div className="flex w-full flex-col">
        <Tabs variant="underlined">
          <Tab
            key="analisis"
            title="Analisis de Datos"
            className="flex flex-col gap-4"
          >
            {ProyectosAnalisis.map((element, index) => (
              <Tarjeta element={element} index={index} />
            ))}
          </Tab>
          <Tab key="apps" title="Aplicaciones" className="flex flex-col gap-4">
            {ProyectosAnalisis.map((element, index) => (
              <Tarjeta element={element} index={index} />
            ))}
          </Tab>
        </Tabs>
      </div>
    </motion.div>
  );
}
