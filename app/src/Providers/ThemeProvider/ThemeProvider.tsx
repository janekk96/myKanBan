import { ThemeProviderContext } from "./ThemeProviderContext";
import { useState } from "react";
import { themes } from "./ThemeProviderTypes";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<themes>("light");
  return (
    <ThemeProviderContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
};
