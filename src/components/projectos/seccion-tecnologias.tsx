import { Aplicacion } from "@/data/proyectos/apps/apps";

interface PropType {
  info: Aplicacion;
}

export default function SeccionTecnologias(props: PropType) {
  const { info } = props;
  return <div>{info.tecnologias}</div>;
}
