import { subtitle } from "@/components/primitives";
import { motion } from "framer-motion";
import Icons from "./icons";
import RedesSociales from "../contactar/redes-sociales";
import { Button } from "@nextui-org/button";
import Curriculum from "../../curriculum/Currículum-General.pdf";
import Name from "./name";

export default function Presentacion() {
  return (
    <motion.div
      className="flex flex-col w-full text-center justify-center items-center gap-1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Name />
      <h1 className={subtitle()}>
        Estudiante | Ingeniería Civil en Computación | UOH
      </h1>

      <div className="flex flex-row gap-4 justify-center items-center mt-6">
        <RedesSociales height={40} gap={4} />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="light light:bg-blue-500 dark:bg-blue-50 shadow-md light:text-white dark:text-black">
            <a href={Curriculum} download="curriculum.pdf">
              Descargar CV
            </a>
          </Button>
        </motion.div>
      </div>

      <section className="flex flex-col w-full mt-8 gap-4">
        <p className={subtitle()}>Conocimientos en:</p>
        <Icons />
      </section>
    </motion.div>
  );
}
