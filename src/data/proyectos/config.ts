import ProyectosAnalisis, { Analisis } from "./analisis/analisis";
import { Aplicacion } from "./apps/apps";

interface Categoria {
  titulo: string;
  proyectos: Array<Analisis | Aplicacion>;
  tipo: string;
}

export const ListaProyectos: Array<Categoria> = [
  { titulo: "Análisis de Datos", proyectos: ProyectosAnalisis, tipo: "add" },
];
// { titulo: "Aplicaciones", proyectos: ProyectosAplicaciones, tipo: "app" },
