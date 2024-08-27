import PanelPrincipal from "../images/Notas estudiantes/panel_principal.jpg";
import detalles_a from "../images/Notas estudiantes/detalles_a.jpg";
import detalles_b from "../images/Notas estudiantes/detalles_b.jpg";
import detalles_c from "../images/Notas estudiantes/detalles_c.jpg";

export const ADD1 = {
  id: 0,
  nombre: "Notas de estudiantes",
  resumen:
    "Este estudio tiene como objetivo comprender que factores influyen en el rendimiendo académico de jóvenes entre 15 y 18 años",
  atributos: [
    {
      nombre: "StudentID",
      descripcion: "Identificador único para cada estudiante.",
      valor: ["(1001 - 3392)"],
    },
    {
      nombre: "Age",
      descripcion: "Edad del estudiante.",
      valor: ["(15 - 18)"],
    },
    {
      nombre: "Gender",
      descripcion: "El género del estudiante.",
      valor: ["Hombre", "Mujer"],
    },
    {
      nombre: "Ethnicity",
      descripcion: "Etnia del estudiante.",
      valor: ["Caucásico", "Afroamericano", "Asiático", "Otro"],
    },
    {
      nombre: "ParentalEducation",
      descripcion: "El nivel de educación que tienen los padres.",
      valor: [
        "Ninguno",
        "Escuela Secundaria",
        "Algo de estudios Universitarios",
        "Licenciatura",
        "Magister o doctorado",
      ],
    },
    {
      nombre: "StudyTimeWeekly",
      descripcion: "Tiempos de estudio por semana, en horas.",
      valor: ["(0 - 20)"],
    },
    {
      nombre: "Absences",
      descripcion: "Número de ausencias durante el año escolar.",
      valor: ["(0 - 30)"],
    },
    {
      nombre: "Tutoring",
      descripcion: "Posee tutor.",
      valor: ["No", "Si"],
    },
    {
      nombre: "ParentalSupport",
      descripcion: "Nivel de apoyo parental.",
      valor: ["Ninguno", "Bajo", "Moderado", "Alto", "Muy alto"],
    },
    {
      nombre: "Extracurricular",
      descripcion: "El estudiante participa en actividades extracurriculares.",
      valor: ["No", "Si"],
    },
    {
      nombre: "Sports",
      descripcion: "El estudiante participa en algún deporte.",
      valor: ["No", "Si"],
    },
    {
      nombre: "Music",
      descripcion:
        "El estudiante participa en actividades relacionadas a la música.",
      valor: ["No", "Si"],
    },
    {
      nombre: "Volunteering",
      descripcion: "El estudiante participa en algún voluntariado.",
      valor: ["No", "Si"],
    },
    {
      nombre: "GPA",
      descripcion:
        "Es el promedio de calificaciones. Va en escala de 2.0 a 4.0",
      valor: ["(2.0 - 4.0)"],
    },
    {
      nombre: "GradeClass",
      descripcion: "Calificación de los estudiantes basado en la columna GPA.",
      valor: [
        "'A' (GPA >= 3.5)",
        "'B' (3.0 <= GPA < 3.5)",
        "'C' (2.5 <= GPA < 3.0)",
        "'D' (2.0 <= GPA < 2.5)",
        "'F' (GPA < 2.0)",
      ],
    },
  ],
  imagenPrincipalURL: PanelPrincipal,
  imagenesExtra: [detalles_a, detalles_b, detalles_c],
  preguntas: [
    {
      pregunta:
        "¿Existe una relación entre la edad de los estudiantes y su rendimiento académico?",
      respuesta:
        "La relación entre la edad de los estudiantes y su rendimiento académico es muy baja. Esto se evidencia en la baja correlación entre estos datos, que es apenas de 0.00028, indicando que la edad no es un factor determinante en el rendimiento académico.",
    },
    {
      pregunta:
        "¿Hay diferencias significativas en el rendimiento académico entre géneros?",
      respuesta:
        "No se observan diferencias significativas en el rendimiento académico entre géneros. Los promedios de calificaciones son bastante similares: en un grupo de 1170 hombres, el promedio de notas es 2.954, mientras que en un grupo de 1222 mujeres, el promedio es 3.011.",
    },
    {
      pregunta:
        "¿Varía el rendimiento académico según la etnicidad de los estudiantes?",
      respuesta:
        "En general, no se observan diferencias notables en el rendimiento académico de los estudiantes según su etnicidad. El promedio de rendimiento ronda entre 1.75 y 2.0, con una varianza de 0.8, lo que sugiere que la etnicidad no influye significativamente en las calificaciones.",
    },
    {
      pregunta:
        "¿Existe una relación entre el nivel educativo de los padres y el rendimiento académico de los estudiantes?",
      respuesta:
        "No se encontró una correlación significativa entre el nivel educativo de los padres y el rendimiento académico de los estudiantes. A pesar de la diversidad en la cantidad de muestras por grupo, el nivel educativo de los padres no parece tener una influencia significativa en las calificaciones de sus hijos.",
    },
    {
      pregunta:
        "¿Cuál es la correlación entre el tiempo de estudio semanal y la clasificación de las notas?",
      respuesta:
        "Existe una pequeña correlación positiva entre el tiempo de estudio semanal y las calificaciones, lo que indica que un mayor tiempo de estudio puede influir en un mejor rendimiento académico. Sin embargo, esta no es una de las variables que más impactan las calificaciones de los estudiantes.",
    },
    {
      pregunta:
        "¿Los estudiantes que reciben tutorías tienden a tener mejores clasificaciones de notas?",
      respuesta:
        "Sí, los estudiantes que reciben tutorías tienden a obtener mejores calificaciones. De hecho, el promedio de notas de estos estudiantes es un 15% superior en comparación con aquellos que no reciben tutorías.",
    },
    {
      pregunta:
        "¿Cómo impacta el número de ausencias en el rendimiento académico de los estudiantes?",
      respuesta:
        "El número de ausencias tiene un impacto negativo significativo en el rendimiento académico. Los estudiantes con más ausencias tienden a tener las peores calificaciones. En el gráfico 'Relación entre ausencias y calificaciones' se observa que los estudiantes con mejores calificaciones son aquellos con menor número de ausencias.",
    },
    {
      pregunta:
        "¿Qué impacto tiene el nivel de apoyo parental en la clasificación de las notas de los estudiantes?",
      respuesta:
        "El apoyo parental tiene un impacto notable en el rendimiento académico de los estudiantes. En comparación con los estudiantes que no reciben ningún tipo de apoyo parental, aquellos que reciben un alto nivel de apoyo tienen un promedio de calificaciones un 46% superior.",
    },
    {
      pregunta:
        "¿La participación en actividades extracurriculares está asociada con un mejor rendimiento académico?",
      respuesta:
        "La participación en actividades extracurriculares está ligeramente asociada con un mejor rendimiento académico. Los estudiantes que participan en alguna actividad extracurricular tienen, en promedio, un 9% mejor rendimiento en sus calificaciones.",
    },
    {
      pregunta:
        "¿Qué tipo de actividades extracurriculares (deportes, música, voluntariado) tienen una mayor influencia en el rendimiento académico?",
      respuesta:
        "Según el gráfico 'Rendimiento de estudiantes según participación en actividades extracurriculares', la combinación de participar en música y voluntariado es la que tiene la mayor influencia positiva en el rendimiento académico, con un promedio de calificaciones un 22% superior en comparación con los estudiantes que no participan en ninguna actividad.",
    },
    {
      pregunta:
        "¿Hay patrones específicos en los estudiantes que obtienen una calificación 'A' comparados con aquellos que obtienen una calificación 'F'?",
      respuesta:
        "El análisis sugiere que los factores que más afectan el rendimiento académico son la asistencia a clases, el tiempo de estudio semanal y el apoyo parental. Los estudiantes que obtienen calificaciones 'A' tienden a asistir regularmente a clases, estudiar consistentemente y recibir apoyo parental, en contraste con aquellos que obtienen calificaciones 'F'.",
    },
  ],
  "creditos:": [
    {
      Dataset: {
        Autor: "RABIE EL KHAROUA",
        Licence:
          "Attribution 4.0 International (CC BY 4.0) https://creativecommons.org/licenses/by/4.0/",
        Citation:
          "Rabie El Kharoua. (2024). 📚 Students Performance Dataset 📚 [Data set]. Kaggle. https://doi.org/10.34740/KAGGLE/DS/5195702",
      },
    },
  ],
};
