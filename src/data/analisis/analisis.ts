interface Preguntas {
  pregunta: string;
  respuesta: string;
}

export interface Analisis {
  nombre: string;
  desc: string;
  imagenURL: string;
  preguntas: Array<Preguntas>;
}

export const Proyectos: Array<Analisis> = [
  {
    nombre: "Notas de estudiantes",
    desc: "asdsadas",
    imagenURL: "",
    preguntas: [
      {
        pregunta: "¿Cómo?",
        respuesta: "Porque sí",
      },
    ],
  },
  {
    nombre: "Segundo proyecto",
    desc: "asdsadas",
    imagenURL: "",
    preguntas: [
      {
        pregunta: "¿Cómo?",
        respuesta: "Porque sí",
      },
    ],
  },
];
export default Proyectos;
