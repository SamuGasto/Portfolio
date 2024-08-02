export type SiteConfig = typeof siteConfig;

interface siteConfig {
  name: string;
  description: string;
  navItemsLeft: Array<{ label: string; href: string }>;
  navItemsRight: Array<{ label: string; href: string }>;
  navMenuItems: Array<{ label: string; href: string }>;
  links: { github: string; linkedin: string };
}

export const siteConfig: siteConfig = {
  name: "Vite + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItemsLeft: [
    {
      label: "Proyectos",
      href: "/projects",
    },
  ],
  navItemsRight: [
    {
      label: "Sobre mi",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Proyectos",
      href: "/projects",
    },
    {
      label: "Sobre mi",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/SamuGasto",
    linkedin: "https://www.linkedin.com/in/samuelramirezzuniga/",
  },
};
