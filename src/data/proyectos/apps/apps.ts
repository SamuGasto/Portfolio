//import APP1 from "./proyectos/APP-1.json";

export interface Aplicacion {
  id: number;
  nombre: string;
  resumen: string;
  desc: string;
  imagenPrincipalURL: string;
  textoImagen: string;
  imagenesExtra: Array<string>;
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
  imagenPrincipalURL: "",
  textoImagen: "",
  imagenesExtra: [],
  tecnologias: [],
};

export const Proyectos: Array<Aplicacion> = [];
export default Proyectos;
