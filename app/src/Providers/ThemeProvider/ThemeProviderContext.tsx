import { createContext } from "react";
import { ThemeProviderContextType } from "./ThemeProviderTypes";

export const ThemeProviderContext = createContext<
  ThemeProviderContextType | undefined
>(undefined);
