import { Analisis } from "@/data/analisis/analisis";
import { Aplicacion } from "@/data/apps/apps";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";

interface PropType {
  tipo: string;
  element: Analisis | Aplicacion;
  index: number;
}

export default function Tarjeta(props: PropType) {
  const { tipo, element, index } = props;
  return (
    <motion.div
      className="flex w-full"
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: index > 0 ? index / 10 : 0 },
      }}
      whileHover={{ scale: 1.01 }}
    >
      <Card
        className="flex flex-col text-center justify-center w-full"
        shadow="sm"
      >
        <CardHeader className="flex flex-col">
          <h1 className="text-xl font-semibold">{element.nombre}</h1>
          <h1 className="text-base italic">{element.resumen}</h1>
        </CardHeader>
        <CardBody>
          <Image radius="md" width={300} src={element.imagenURL}></Image>
        </CardBody>
        <CardFooter className="flex flex-col w-full">
          <Link href={`/projects/${tipo}-${element.id}`}>
            <h1>Ver más</h1>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
