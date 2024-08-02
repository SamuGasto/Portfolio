import { siteConfig } from "@/config/site";

import { GithubIcon } from "../icons";
import LinkedinLogo from "../../images/redes-sociales/LI-In-Bug.png";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";

interface PropType {
  height: number;
  gap: number;
}

export default function RedesSociales(props: PropType) {
  const { height, gap } = props;
  return (
    <div className={`flex flex-row justify-center items-center gap-${gap}`}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link isExternal color="foreground" href={siteConfig.links.github}>
          <GithubIcon size={height} />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link isExternal color="foreground" href={siteConfig.links.linkedin}>
          <Image height={height} radius="none" src={LinkedinLogo} />
        </Link>
      </motion.div>
    </div>
  );
}
