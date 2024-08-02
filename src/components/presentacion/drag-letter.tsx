import { motion } from "framer-motion";
import { title } from "../primitives";

interface PropType {
  letter: string;
  colorLetter?:
    | "violet"
    | "yellow"
    | "blue"
    | "cyan"
    | "green"
    | "pink"
    | "foreground"
    | undefined;
}

export default function DragLetter(props: PropType) {
  const { letter, colorLetter } = props;
  return (
    <motion.div
      className="flex flex-row"
      drag
      dragConstraints={{
        top: -1,
        left: -1,
        right: 1,
        bottom: 1,
      }}
      whileHover={{ scale: 1.05 }}
    >
      <h1
        className={
          title({ color: colorLetter, size: "lg" }) +
          " " +
          "font-PlaywriteDKUloopet font-light flex p-2 -ml-3"
        }
      >
        {letter}
      </h1>
    </motion.div>
  );
}
