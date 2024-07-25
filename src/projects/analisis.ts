interface Preguntas {
  pregunta: string;
  respuesta: string;
}

interface Proyecto {
  nombre: string;
  desc: string;
  imagenURL: string;
  preguntas: Array<Preguntas>;
}

export const Proyectos: Array<Proyecto> = [
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
