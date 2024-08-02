import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

export default function NoEncontrado() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10">
      <h1 className="flex font-bold mt-40 text-5xl align-middle">
        No se encontró el proyecto
      </h1>
      <Button
        color="primary"
        size="lg"
        variant="ghost"
        onPress={() => navigate("/projects")}
      >
        Volver a Proyectos
      </Button>
    </div>
  );
}
