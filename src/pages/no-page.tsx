import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

export default function NoPage() {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <div className="flex flex-col w-full justify-center items-center gap-4">
        <h1 className="flex font-bold mt-36 text-8xl align-middle">404</h1>
        <h1 className="flex text-5xl align-middle">Página no encontrada</h1>
        <Button
          className="mt-10"
          color="primary"
          size="lg"
          variant="ghost"
          onPress={() => navigate("/")}
        >
          Ir a inicio
        </Button>
      </div>
    </DefaultLayout>
  );
}
