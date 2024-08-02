import DefaultLayout from "@/layouts/default";
import Proyectos from "@/components/projectos/lista-projectos";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import proyectosApp, {
  Aplicacion,
  ProyectoAppNoEncontrado,
} from "@/data/apps/apps";
import proyectosAdd, { Analisis } from "@/data/analisis/analisis";
import VistaProyecto from "@/components/projectos/vista-proyecto";
import NoEncontrado from "@/components/projectos/no-encontrado";

export default function ProjectsPage() {
  let { id } = useParams();

  let separate: Array<string> | undefined = id?.split("-");

  let info: Analisis | Aplicacion = ProyectoAppNoEncontrado;

  if (separate) {
    if (separate[0] === "add") {
      info = proyectosAdd[Number(separate[1])];
    } else if (separate[0] === "app") {
      info = proyectosApp[Number(separate[1])];
    }
  }

  // Funciones del componente
  function MostrarInfo() {
    if (info) {
      if (info.nombre !== "Proyecto no encontrado") {
        return <VistaProyecto info={info} />;
      } else {
        return <NoEncontrado />;
      }
    } else {
      return <NoEncontrado />;
    }
  }

  console.log(info);

  return (
    <DefaultLayout>
      {id ? <motion.div>{MostrarInfo()}</motion.div> : <Proyectos />}
    </DefaultLayout>
  );
}
