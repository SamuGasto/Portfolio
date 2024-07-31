export type SiteConfig = typeof siteConfig;

export const siteConfig = {
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
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
