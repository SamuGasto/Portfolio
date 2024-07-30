import Experiencia from "@/components/experiencia/experiencia";
import Presentacion from "@/components/presentacion/presentacion";
import ListaProyectos from "@/components/projectos/listaProjectos";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Presentacion />
        <ListaProyectos />
        <Experiencia />
      </section>
    </DefaultLayout>
  );
}
