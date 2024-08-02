import { Analisis, Preguntas } from "@/data/analisis/analisis";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

interface PropType {
  info: Analisis;
}

export default function SeccionPreguntas(props: PropType) {
  const { info } = props;
  return (
    <div>
      <Accordion variant="splitted" selectionMode="multiple">
        {info.preguntas?.map((pregunta: Preguntas, index: number) => (
          <AccordionItem
            key={index}
            aria-label="pregunta"
            title={pregunta.pregunta}
          >
            {pregunta.respuesta}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
