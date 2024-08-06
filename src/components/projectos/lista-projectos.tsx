import { title } from "@/components/primitives";
import { Tab, Tabs } from "@nextui-org/tabs";
import ProyectosAnalisis, { Analisis } from "@/data/analisis/analisis";
import ProyectosApp, { Aplicacion } from "@/data/apps/apps";
import { motion } from "framer-motion";
import Tarjeta from "./tarjetas";

export default function Proyectos() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 py-2 md:py-4 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ size: "sm" })}>Proyectos</h1>
      </div>
      <div className="flex w-full flex-col">
        <Tabs className="flex w-full flex-col" variant="underlined">
          <Tab
            key="analisis"
            title="Analisis de Datos"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
          >
            {ProyectosAnalisis.map((element: Analisis, index: number) => (
              <Tarjeta
                key={`add-${element.id}`}
                tipo="add"
                element={element}
                index={index}
              />
            ))}
          </Tab>
          <Tab
            key="apps"
            title="Aplicaciones"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
          >
            {ProyectosApp.map((element: Aplicacion, index: number) => (
              <Tarjeta
                key={`app-${element.id}`}
                tipo="app"
                element={element}
                index={index}
              />
            ))}
          </Tab>
        </Tabs>
      </div>
    </motion.div>
  );
}
