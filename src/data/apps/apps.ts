import CorrelacionImagen from "./images/P1/correlacion.png";

export interface Aplicacion {
  id: number;
  nombre: string;
  resumen: string;
  desc: string;
  imagenURL: string;
  tecnologias: Array<string>;
}

export const esAplicacion = (x: any): x is Aplicacion => {
  x;
  return true;
};

export const ProyectoAppNoEncontrado: Aplicacion = {
  id: 0,
  nombre: "Proyecto no encontrado",
  resumen: "",
  desc: "",
  imagenURL: "",
  tecnologias: [],
};

export const Proyectos: Array<Aplicacion> = [
  {
    id: 0,
    nombre: "Yo estudio",
    resumen: "Breve resumen",
    desc: "asdsadas",
    imagenURL: CorrelacionImagen,
    tecnologias: [],
  },
  {
    id: 1,
    nombre: "No estudio ;-;",
    resumen: "Breve resumen",
    desc: "asdsadas",
    imagenURL: "",
    tecnologias: [],
  },
];
export default Proyectos;
