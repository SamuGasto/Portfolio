import { Image } from "@nextui-org/image";
import blender from "./images/blender.svg";
import css from "./images/css.svg";
import csharp from "./images/csharp.svg";
import expo from "./images/expo.svg";
import html5 from "./images/html5.svg";
import javascript from "./images/javascript.svg";
import mongodb from "./images/mongodb.svg";
import nextjs from "./images/Next.js_wordmark_dark.svg";
import nodejs from "./images/nodejs.svg";
import python from "./images/python.svg";
import react from "./images/react.svg";
import sqlite from "./images/sqlite.svg";
import unity from "./images/Unity_dark.svg";
import ue5 from "./images/Unreal_Engine_dark.svg";

const width = 40;

export const Iconos = [
  () => <Image radius="none" width={width} src={css} />,
  () => <Image radius="none" width={width} src={html5} />,
  () => <Image radius="none" width={width} src={javascript} />,
  () => <Image radius="none" width={width} src={react} />,
  () => <Image radius="none" width={width} src={nodejs} />,
  () => <Image radius="none" width={width} src={nextjs} />,
  () => <Image radius="none" width={width} src={expo} />,
  () => <Image radius="none" width={width} src={mongodb} />,
  () => <Image radius="none" width={width} src={sqlite} />,
  () => <Image radius="none" width={width} src={python} />,
  () => <Image radius="none" width={width} src={csharp} />,
  () => <Image radius="none" width={width} src={unity} />,
  () => <Image radius="none" width={width} src={ue5} />,
  () => <Image radius="none" width={width} src={blender} />,
];
