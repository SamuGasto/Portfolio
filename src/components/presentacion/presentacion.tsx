import { title, subtitle } from "@/components/primitives";
import { motion } from "framer-motion";
import Icons from "./icons";

export default function Presentacion() {
  return (
    <motion.div
      className="flex flex-col text-center justify-center gap-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <section>
        <h1 className={title()}>Samuel&nbsp;</h1>
        <h1 className={title({ color: "blue" })}>Ramírez&nbsp;</h1>
        <br />
        <h1 className={subtitle()}>
          Estudiante | Ingeniería Civil en Computación
        </h1>
      </section>

      <section>
        <p className={subtitle()}>Conocimientos en:</p>
        <Icons />
      </section>
    </motion.div>
  );
}
