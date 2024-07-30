export interface Preguntas {
  pregunta: string;
  respuesta: string;
}

export interface Analisis {
  id: number;
  nombre: string;
  resumen: string;
  desc: string;
  imagenURL: string;
  preguntas: Array<Preguntas>;
}

export const esAnalisis = (x: any): x is Analisis => {
  return true;
};

export const ProyectoAddNoEncontrado: Analisis = {
  id: 0,
  nombre: "Proyecto no encontrado",
  resumen: "",
  desc: "",
  imagenURL: "",
  preguntas: [],
};

export const Proyectos: Array<Analisis> = [
  {
    id: 0,
    nombre: "Notas de estudiantes",
    resumen: "Breve resumen",
    desc: "asdsadas",
    imagenURL: "",
    preguntas: [
      {
        pregunta: "¿Cómo?",
        respuesta: "Porque sí",
      },
      {
        pregunta: "¿Cuando?",
        respuesta: "Ayer",
      },
    ],
  },
  {
    id: 1,
    nombre: "Segundo proyecto",
    resumen: "Breve resumen",
    desc: "asdsadas",
    imagenURL: "",
    preguntas: [
      {
        pregunta: "¿Cómo?",
        respuesta: "Porque sí",
      },
      {
        pregunta: "¿Cuando?",
        respuesta: "Ayer",
      },
    ],
  },
];
export default Proyectos;
