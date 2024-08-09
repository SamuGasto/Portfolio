import { Analisis, Atributo, esAnalisis } from "@/data/analisis/analisis";
import { Aplicacion } from "@/data/apps/apps";
import { motion } from "framer-motion";
import { subtitle, title } from "../primitives";
import SeccionPreguntas from "./seccion-preguntas";
import SeccionTecnologias from "./seccion-tecnologias";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

interface PropType {
  info: Analisis | Aplicacion;
}

export default function VistaProyecto(props: PropType) {
  const { info } = props;

  function Titulo() {
    if (esAnalisis(info)) {
      return (
        <div>
          <h1 className={title()}>{info.nombre}</h1>
          <h1 className={subtitle()}>{info.resumen}</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className={title()}>{info.nombre}</h1>
          <h1 className={subtitle()}>{info.desc}</h1>
        </div>
      );
    }
  }

  function Descripcion() {
    if (esAnalisis(info)) {
      return (
        <div>
          <h1 className={title()}>Atributos del conjunto de datos</h1>
          <Table>
            <TableHeader>
              <TableColumn>Columna</TableColumn>
              <TableColumn>Descripción</TableColumn>
              <TableColumn>Valores</TableColumn>
            </TableHeader>
            <TableBody>
              {info.atributos.map((element: Atributo, index: number) => (
                <TableRow key={index} className="p-6">
                  <TableCell>{element.nombre}</TableCell>
                  <TableCell>{element.descripcion}</TableCell>
                  <TableCell>
                    {element.valor.map((element) => {
                      return element + " | ";
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="">{info.resumen}</h1>
        </div>
      );
    }
  }

  return (
    <motion.div
      className="flex flex-col text-center justify-center gap-10 py-4 md:py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      {Titulo()}
      <hr />
      {Descripcion()}
      <hr />
      <section className="w-5/6 md:w-4/6 lg:w-3/6 self-center">
        {esAnalisis(info) ? (
          <SeccionPreguntas info={info} />
        ) : (
          <SeccionTecnologias info={info} />
        )}
      </section>
    </motion.div>
  );
}
