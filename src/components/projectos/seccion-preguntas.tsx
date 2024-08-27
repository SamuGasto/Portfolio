import { Analisis, Preguntas } from "@/data/proyectos/analisis/analisis";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

interface PropType {
  info: Analisis;
}

export default function SeccionPreguntas(props: PropType) {
  const { info } = props;

  const PreguntaRespuesta = (pregunta: Preguntas, index: number) => {
    return (
      <div key={index} className="flex w-full">
        <Card shadow="sm">
          <CardHeader>
            <h1 className="text-lg font-semibold">{pregunta.pregunta}</h1>
          </CardHeader>
          <CardBody>
            <h1>{pregunta.respuesta}</h1>
          </CardBody>
        </Card>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col justify-center items-center self-center gap-12">
      <h1 className="font-PlaywriteDKUloopet text-4xl">Análisis</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {info.preguntas?.map((pregunta: Preguntas, index: number) =>
          PreguntaRespuesta(pregunta, index)
        )}
      </div>
    </div>
  );
}
