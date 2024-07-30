import { motion } from "framer-motion";

export default function Experiencia() {
  return (
    <motion.div
      className="flex flex-col text-center justify-center gap-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <p>Tomate</p>
    </motion.div>
  );
}
