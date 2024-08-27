import { title } from "@/components/primitives";
import { Tab, Tabs } from "@nextui-org/tabs";
import { motion } from "framer-motion";
import Tarjeta from "./tarjetas";
import { ListaProyectos } from "../../data/proyectos/config";

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
          {ListaProyectos.map((element) => (
            <Tab
              key={element.titulo}
              title={element.titulo}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
            >
              {element.proyectos.map((proyecto, index) => (
                <Tarjeta
                  key={`${proyecto.nombre}-${proyecto.id}`}
                  tipo={element.tipo}
                  element={proyecto}
                  index={index}
                />
              ))}
            </Tab>
          ))}
        </Tabs>
      </div>
    </motion.div>
  );
}
