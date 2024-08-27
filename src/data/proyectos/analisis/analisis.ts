import { ADD1 } from "./proyectos/ADD-1";

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
  imagenPrincipalURL: string;
  textoImagen: string;
  imagenesExtra: Array<string>;
  preguntas: Array<Preguntas>;
  creditos: Array<{
    Dataset: {
      Autor: string;
      Licence: string;
      Citation: string;
    };
  }>;
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
  imagenPrincipalURL: "",
  textoImagen: "",
  imagenesExtra: [],
  preguntas: [],
  creditos: [{ Dataset: { Autor: "", Licence: "", Citation: "" } }],
};

export const Proyectos: Array<Analisis> = [ADD1];
export default Proyectos;
