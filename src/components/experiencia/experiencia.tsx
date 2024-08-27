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
          en la Universidad de O’Higgins. Mi formación académica, complementada
          con mi estudio autodidacta, ha fortalecido mi capacidad para enfrentar
          desafíos técnicos con un enfoque meticuloso y analítico. Estoy
          altamente comprometido con el desarrollo de soluciones tecnológicas
          innovadoras que cumplan con los más altos estándares de calidad.
        </p>
      </div>
      <Link href="/about">Saber más</Link>
    </motion.div>
  );
}
