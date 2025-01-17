import { Session } from "@supabase/supabase-js";

export interface SessionProviderContextType {
  session: Session | null;
  logout: () => void;
}
