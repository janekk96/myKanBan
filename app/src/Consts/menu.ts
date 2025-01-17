import { LuCog, LuFolder, LuHouse, LuUser } from "react-icons/lu";
import { IconType } from "react-icons/lib";

export interface MenuItem {
  title: string;
  icon: IconType;
  href: string;
}

export interface MenuGroup {
  title: string;
  items: MenuItem[];
}

export const menu: MenuGroup[] = [
  {
    title: "Main",
    items: [
      {
        title: "Dashboard",
        icon: LuHouse,
        href: "/",
      },
      {
        title: "Projects",
        icon: LuFolder,
        href: "/projects",
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Profile",
        icon: LuUser,
        href: "/profile",
      },
      {
        title: "Settings",
        icon: LuCog,
        href: "/settings",
      },
    ],
  },
];
