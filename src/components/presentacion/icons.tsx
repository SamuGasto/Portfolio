import { motion } from "framer-motion";
import { Iconos } from "../../data/tecnologias/icons";

export default function Icons() {
  return (
    <motion.div className="grid grid-rows-1 grid-flow-col auto-cols-max w-full justify-center items-center gap-x-10">
      {Iconos.map((element, index) => (
        <motion.p
          className="font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: index > 0 ? index / 10 : 0 },
          }}
        >
          {element()}
        </motion.p>
      ))}
    </motion.div>
  );
}
