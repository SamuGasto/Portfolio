import { Analisis, esAnalisis } from "@/data/proyectos/analisis/analisis";
import { subtitle } from "../primitives";
import { Aplicacion } from "@/data/proyectos/apps/apps";

function Titulo(info: Analisis | Aplicacion) {
  if (esAnalisis(info)) {
    return (
      <div className="flex flex-col justify-center gap-5">
        <h1 className="font-PlaywriteDKUloopet text-6xl font-semibold">
          {info.nombre}
        </h1>
        <h1 className={subtitle()}>{info.resumen}</h1>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center gap-5">
        <h1 className="font-PlaywriteDKUloopet text-6xl font-semibold">
          {info.nombre}
        </h1>
        <h1 className={subtitle()}>{info.desc}</h1>
      </div>
    );
  }
}

export default Titulo;
