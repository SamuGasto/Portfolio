import { Analisis, esAnalisis } from "@/data/proyectos/analisis/analisis";
import { Aplicacion } from "@/data/proyectos/apps/apps";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

function Descripcion(info: Analisis | Aplicacion) {
  if (esAnalisis(info)) {
    return (
      <div className="flex flex-col gap-8 items-center">
        <h1 className="font-PlaywriteDKUloopet text-4xl">
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
}

export default Descripcion;
