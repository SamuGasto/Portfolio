import {
  Analisis,
  Atributo,
  esAnalisis,
} from "@/data/proyectos/analisis/analisis";
import { Aplicacion } from "@/data/proyectos/apps/apps";
import { AnimatePresence, motion } from "framer-motion";
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
import { ReactNode } from "react";
import { Image } from "@nextui-org/image";
import CarruselImagenes from "./carrusel-imagenes";

interface PropType {
  info: Analisis | Aplicacion;
}

export default function VistaProyecto(props: PropType) {
  const { info } = props;

  const Titulo = (): ReactNode => {
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
  };

  const Descripcion = (): ReactNode => {
    if (esAnalisis(info)) {
      return (
        <div className="flex flex-col gap-8 items-center">
          <h1 className={title({ size: "sm" })}>
            Atributos del conjunto de datos
          </h1>
          <div className="flex w-full sm:w-11/12 md:w-4/5  lg:w-3/4">
            <Table>
              <TableHeader>
                <TableColumn>Columna</TableColumn>
                <TableColumn>Descripción</TableColumn>
                <TableColumn>Valores</TableColumn>
              </TableHeader>
              <TableBody>
                {info.atributos.map((element, index) => (
                  <TableRow key={index} className="p-6">
                    <TableCell>{element.nombre}</TableCell>
                    <TableCell>{element.descripcion}</TableCell>
                    <TableCell>
                      {element.valor.map((element, index) => {
                        if (index > 0) {
                          return ", " + element;
                        }
                        return element;
                      })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="">{info.resumen}</h1>
        </div>
      );
    }
  };

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
      <CarruselImagenes info={info} />
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
