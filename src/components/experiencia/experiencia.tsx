import { motion } from "framer-motion";
import { title } from "../primitives";
import { Link } from "@nextui-org/link";

export default function Experiencia() {
  return (
    <motion.div
      className="flex flex-col text-center justify-center items-center gap-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <h1 className={title({ size: "sm" }) + " " + "mb-2"}>Sobre mi</h1>
      <div className="w-full md:w-2/3 lg:w-2/3 inline">
        <p>
          <span>Soy</span>{" "}
          <span className="font-semibold">Samuel Ramírez Zúñiga</span>{" "}
          <span>, estudiante de octavo semestre de</span>{" "}
          <span className="font-semibold">Ingeniería Civil en Computación</span>{" "}
          en la Universidad de O’Higgins. Mi trayectoria académica y profesional
          refleja mi pasión por la{" "}
          <span className="font-semibold">tecnología y la programación</span>.
          Además de mis estudios, he adquirido experiencia práctica como
          ayudante docente y asistente DTI en mi universidad, fortaleciendo mis
          habilidades técnicas y de soporte.
        </p>
      </div>
      <Link href="/about">Saber más</Link>
    </motion.div>
  );
}
