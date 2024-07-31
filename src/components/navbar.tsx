import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "./icons";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NextUINavbar
      maxWidth="full"
      className="shadow-md dark:border-b dark:border-white"
    >
      <NavbarContent className="ml-40 basis-1/5 sm:basis-full" justify="center">
        <NavbarBrand className="w-full gap-10 max-w-fit items-center">
          {siteConfig.navItemsLeft.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
          <Logo />

          {siteConfig.navItemsRight.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitch />
        <Button
          color="primary"
          radius="sm"
          className="light light:bg-blue-500 dark:bg-white shadow-md light:shadow-blue-300 dark:shadow-blue-100"
          onPress={() => navigate("/contact")}
        >
          <h1 className="light light:text-white dark:text-black font-PlaywriteDKUloopet">
            Contacto
          </h1>
        </Button>
      </NavbarContent>
    </NextUINavbar>
  );
};
