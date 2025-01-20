import { LuCog, LuFolder, LuHouse, LuUser } from "react-icons/lu";
import { IconType } from "react-icons/lib";

export interface MenuItem {
  title: string;
  icon: IconType;
  href: string;
  element: JSX.Element;
  topBar?: JSX.Element;
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
        element: <div>Dashboard Page</div>,
      },
      {
        title: "Projects",
        icon: LuFolder,
        href: "/projects",
        element: <div>Projects Page</div>,
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
        element: <div>Profile Page</div>,
      },
      {
        title: "Settings",
        icon: LuCog,
        href: "/settings",
        element: <div>Settings Page</div>,
      },
    ],
  },
];
