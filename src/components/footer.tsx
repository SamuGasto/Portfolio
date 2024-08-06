import { Link } from "@nextui-org/link";
import LinkedinLogo from "../images/redes-sociales/LI-In-Bug.png";
import { motion } from "framer-motion";
import { GithubIcon } from "./icons";
import { siteConfig } from "@/config/site";
import { Image } from "@nextui-org/image";

export default function Footer() {
  const height = 40;
  return (
    <footer className="w-full flex flex-col items-center justify-center mt-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]">
      <hr className="flex w-full" />
      <motion.div
        className="flex flex-row gap-6 items-center py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link isExternal color="foreground" href={siteConfig.links.github}>
            <GithubIcon size={height} />
          </Link>
        </motion.div>
        <motion.h1
          className="font-PlaywriteDKUloopet text-2xl"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          Samuel Ramírez
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link isExternal color="foreground" href={siteConfig.links.linkedin}>
            <Image height={height} radius="none" src={LinkedinLogo} />
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
}
