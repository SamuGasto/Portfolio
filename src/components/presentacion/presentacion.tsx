import { title, subtitle } from "@/components/primitives";
import { motion } from "framer-motion";
import Icons from "./icons";

export default function Presentacion() {
  return (
    <motion.div
      className="flex flex-col text-center justify-center gap-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <section>
        <h1
          className={
            title({ size: "lg" }) + " " + "font-PlaywriteDKUloopet font-light"
          }
        >
          Samuel&nbsp;
        </h1>
        <h1
          className={
            title({ color: "blue", size: "lg" }) +
            " " +
            "font-PlaywriteDKUloopet font-light"
          }
        >
          Ramírez&nbsp;
        </h1>
        <br />
        <h1 className={subtitle()}>
          Estudiante | Ingeniería Civil en Computación | UOH
        </h1>
      </section>

      <section>
        <p className={subtitle()}>Conocimientos en:</p>
        <Icons />
      </section>
    </motion.div>
  );
}
