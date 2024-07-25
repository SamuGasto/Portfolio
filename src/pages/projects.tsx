import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import ProyectosAnalisis from "@/projects/analisis";

export default function ProjectsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Proyectos</h1>
        </div>
        <div className="flex w-full flex-col">
          <Tabs variant="underlined">
            <Tab
              key="analisis"
              title="Analisis de Datos"
              className="flex flex-col gap-4"
            >
              {ProyectosAnalisis.map((element) => (
                <Card shadow="sm">
                  <CardBody>
                    <p>{element.nombre}</p>
                  </CardBody>
                </Card>
              ))}
            </Tab>
            <Tab key="apps" title="Aplicaciones">
              <h1>Aplicación</h1>
            </Tab>
          </Tabs>
        </div>
      </section>
    </DefaultLayout>
  );
}
