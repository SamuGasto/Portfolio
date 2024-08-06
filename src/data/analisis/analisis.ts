import ADD1 from "./proyectos/ADD-1.json";

export interface Preguntas {
  pregunta: string;
  respuesta: string;
}

export interface Atributo {
  nombre: string;
  descripcion: string;
  valor: Array<string>;
}

export interface Analisis {
  id: number;
  nombre: string;
  resumen: string;
  atributos: Array<Atributo>;
  imagenURL: string;
  preguntas: Array<Preguntas>;
}

export const esAnalisis = (x: any): x is Analisis => {
  x;
  return true;
};

export const ProyectoAddNoEncontrado: Analisis = {
  id: 0,
  nombre: "Proyecto no encontrado",
  resumen: "",
  atributos: [],
  imagenURL: "",
  preguntas: [],
};

export const Proyectos: Array<Analisis> = [ADD1];
export default Proyectos;
