import { Analisis } from "@/data/analisis/analisis";
import { Card, CardBody } from "@nextui-org/card";
import { motion } from "framer-motion";

interface PropType {
  element: Analisis;
  index: number;
}

export default function Tarjeta(props: PropType) {
  const { element, index } = props;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: index > 0 ? index / 10 : 0 },
      }}
    >
      <Card shadow="sm">
        <CardBody>
          <p>{element.nombre}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
}
