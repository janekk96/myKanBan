export type themes = "light" | "dark";

export interface ThemeProviderContextType {
  theme: themes;
  setTheme: (theme: themes) => void;
}
