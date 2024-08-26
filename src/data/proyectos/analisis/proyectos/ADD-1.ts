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
        "Existe una muy baja relación entre la edad y el rendimiento académico, se verifica debido a la baja correlación entre estos datos, de tan solo un 0.00028.",
    },
    {
      pregunta:
        "¿Hay diferencias significativas en el rendimiento académico entre géneros?",
      respuesta:
        "No, en general los promedio de calificaciones son bastante parecidos, considerando un universo de 1170 hombres con promedio de notas: 2.954 y 1222 mujeres con promedio: 3.011",
    },
    {
      pregunta:
        "¿Varía el rendimiento académico según la etnicidad de los estudiantes?",
      respuesta:
        "En el general de los casos no se ve diferencia entre los estudiantes por ser de diferentes etnias. El rendimiento promedio ronda los 1.75-2.0 y la varianza es de 0.8 en general.",
    },
    {
      pregunta:
        "¿Existe una relación entre el nivel educativo de los padres y el rendimiento académico de los estudiantes?",
      respuesta:
        "No hay una correlación entre estos dos atributos, de hecho, aunque la cantidad de muestras por grupo es bastante diversa, en el caso general no tiene una influencia significativa.",
    },
    {
      pregunta:
        "¿Cuál es la correlación entre el tiempo de estudio semanal y la clasificación de las notas?",
      respuesta:
        "Gracias a la matriz de correlación podemos notar que existe una pequeña correlación, puede llegar a influenciar positivamente. Pero no es una de las cosas que más influencie en las calificaciones del estudiante.",
    },
    {
      pregunta:
        "¿Los estudiantes que reciben tutorías tienden a tener mejores clasificaciones de notas?",
      respuesta:
        "Los estudiantes que reciben tutorias si lográn obtener mejores calificaciones, de hecho el promedio aumenta un 15% en comparación.",
    },
    {
      pregunta:
        "¿Cómo impacta el número de ausencias en el rendimiento académico de los estudiantes?",
      respuesta:
        "El estudio muestra como los estudiantes con mayor número de ausencias tienen en promedio las peores calificaciones, de hecho en el gráfico 'Relación entre ausencias y calificaciones' podemos notar como los estudiantes con mejores calificaciones son los mismos que tienen menor número de ausencias.",
    },
    {
      pregunta:
        "¿Qué impacto tiene el nivel de apoyo parental en la clasificación de las notas de los estudiantes?",
      respuesta:
        "Posee un notable aporte al rendimiento del estudiante, de hecho en comparación a un estudiante que no recibe ninguna clase de apoyo parental, el promedio del que si recibe un alto apoyo es de un 46% mejor.",
    },
    {
      pregunta:
        "¿La participación en actividades extracurriculares está asociada con un mejor rendimiento académico?",
      respuesta:
        "Levemente, de hecho las calificaciones en promedio de estudiantes que si participan de alguna actividad extracurricular son un 9% mejor.",
    },
    {
      pregunta:
        "¿Qué tipo de actividades extracurriculares (deportes, música, voluntariado) tienen una mayor influencia en el rendimiento académico?",
      respuesta:
        "En el gráfico 'Rendimiento de estudiantes según participación en actividades extracurriculares' podemos notar como el participar de Música y Voluntarido es la mejor combinación, obteniendo en promedio 22% mejor calificaciones que los que no participan de ninguna.",
    },
    {
      pregunta:
        "¿Hay patrones específicos en los estudiantes que obtienen una calificación 'A' comparados con aquellos que obtienen una calificación 'F'?",
      respuesta:
        "De todo el análisis se puede concluir que los factores que más afectan el rendimiento académico es la ausencia a clases, el estudio semanal y apoyo parental.",
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
