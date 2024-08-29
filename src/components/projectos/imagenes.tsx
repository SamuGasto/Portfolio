import { Analisis } from "@/data/proyectos/analisis/analisis";
import { Aplicacion } from "@/data/proyectos/apps/apps";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { useState } from "react";

interface PropType {
  info: Analisis | Aplicacion;
}

function Imagenes(props: PropType) {
  const { info } = props;
  const imagenes = [info.imagenPrincipalURL].concat(info.imagenesExtra);

  const [index, setIndex] = useState(0);

  function NextArrow() {
    return (
      <div className="p-1 lg:p-5 justify-center self-center">
        <Button
          size="sm"
          variant="bordered"
          onClick={() => {
            if (index === imagenes.length - 1) {
              setIndex(0);
              return;
            } else setIndex(index + 1);
          }}
        >
          {">"}
        </Button>
      </div>
    );
  }
  function PrevArrow() {
    return (
      <div className="p-1 lg:p-5 justify-center self-center">
        <Button
          size="sm"
          variant="bordered"
          onClick={() => {
            console.log(index);
            if (index === 0) {
              setIndex(imagenes.length - 1);
              return;
            } else setIndex(index - 1);
          }}
        >
          {"<"}
        </Button>
      </div>
    );
  }

  function Carousel() {
    return (
      <div className="flex flex-col lg:flex-row w-full">
        <PrevArrow />
        <Image src={imagenes[index]} />
        <NextArrow />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-8 items-center">
      <h1 className="font-PlaywriteDKUloopet text-4xl">Imágenes</h1>
      <h1 className="text-lg">{info.textoImagen}</h1>
      <Carousel />
    </div>
  );
}

export default Imagenes;
