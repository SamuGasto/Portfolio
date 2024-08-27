import { Analisis } from "@/data/proyectos/analisis/analisis";
import { Aplicacion } from "@/data/proyectos/apps/apps";
import { AnimatePresence, motion } from "framer-motion";
import { Image } from "@nextui-org/image";
import { useState } from "react";

interface PropType {
  info: Analisis | Aplicacion;
}

function CarruselImagenes(props: PropType) {
  const { info } = props;

  const [selectedId, setSelectedId] = useState("0");

  const imagenes = [info.imagenPrincipalURL].concat(info.imagenesExtra);

  return (
    <div>
      <motion.div className="flex flex-col gap-8 items-center" layoutId="">
        <h1 className="font-PlaywriteDKUloopet text-4xl">Imágenes</h1>
        <div className="w-3/5">
          <AnimatePresence>
            <motion.div className="flex w-full" layoutId={selectedId}>
              <Image
                key={imagenes[Number(selectedId)]}
                src={imagenes[Number(selectedId)]}
              />
            </motion.div>
          </AnimatePresence>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {imagenes.map((imagen, index) => (
              <motion.div
                layoutId={index.toString()}
                onClick={() => {
                  console.log(index.toString());
                  setSelectedId(index.toString());
                }}
              >
                <Image key={index} src={imagen} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CarruselImagenes;
