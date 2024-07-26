import { Image } from "@nextui-org/image";
import zustandIcon from "./images/Zustand.png";
import cssIcon from "./images/css.png";
import expoIcon from "./images/expo.png";
import htmlIcon from "./images/html.png";
import javascriptIcon from "./images/javascript.png";
import mongoDBIcon from "./images/mongodb.png";
import nodejsIcon from "./images/nodejs.svg";
import reactIcon from "./images/react.png";
import sqlIcon from "./images/sql.png";

const width = 50;

export const Iconos = [
  () => <Image radius="none" width={width + 50} src={zustandIcon} />,
  () => <Image radius="none" width={width} src={cssIcon} />,
  () => <Image radius="none" width={width + 20} src={expoIcon} />,
  () => <Image radius="none" width={width} src={htmlIcon} />,
  () => <Image radius="none" width={width} src={javascriptIcon} />,
  () => <Image radius="none" width={width} src={mongoDBIcon} />,
  () => <Image radius="none" width={width} src={nodejsIcon} />,
  () => <Image radius="none" width={width} src={reactIcon} />,
  () => <Image radius="none" width={width} src={sqlIcon} />,
];
