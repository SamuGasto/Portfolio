import { Analisis } from "@/data/proyectos/analisis/analisis";
import { Aplicacion } from "@/data/proyectos/apps/apps";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

interface PropType {
  info: Analisis | Aplicacion;
}

function Imagenes(props: PropType) {
  const { info } = props;

  function NextArrow(props: any) {
    const { onClick } = props;
    return (
      <div className="p-1 lg:p-5 justify-center self-center">
        <Button size="sm" variant="bordered" onClick={onClick}>
          {">"}
        </Button>
      </div>
    );
  }
  function PrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div className="p-1 lg:p-5 justify-center self-center">
        <Button size="sm" variant="bordered" onClick={onClick}>
          {"<"}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-ful gap-8 items-center">
      <h1 className="font-PlaywriteDKUloopet text-4xl">Imágenes</h1>
      <h1 className="text-lg">{info.textoImagen}</h1>
      <Slider
        className="flex w-full"
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
      >
        <div>
          <Image src={info.imagenPrincipalURL} />
        </div>
        {info.imagenesExtra.map((imagen, index) => (
          <div>
            <Image key={index} src={imagen} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Imagenes;
