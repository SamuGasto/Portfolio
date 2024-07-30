import { motion } from "framer-motion";
import { Iconos } from "../../data/tecnologias/icons";
import { Card, CardBody } from "@nextui-org/card";

export default function Icons() {
  return (
    <motion.div>
      <Card shadow="sm" className="p-1">
        <CardBody className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 w-full items-center gap-2">
          {Iconos.map((element, index) => (
            <motion.p
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index > 0 ? index / 10 : 0 },
              }}
              whileHover={{ scale: 1.1 }}
            >
              <div>{element()}</div>
            </motion.p>
          ))}
        </CardBody>
      </Card>
    </motion.div>
  );
}
