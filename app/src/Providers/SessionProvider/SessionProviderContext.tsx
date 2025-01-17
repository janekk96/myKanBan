import { createContext } from "react";
import { SessionProviderContextType } from "./SessionProviderTypes";

export const SessionProviderContext =
  createContext<SessionProviderContextType | null>(null);
