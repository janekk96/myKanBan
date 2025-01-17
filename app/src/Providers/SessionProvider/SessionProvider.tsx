import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { SUPABASE_CLIENT } from "../../Consts/supabase";
import { SessionProviderContext } from "./SessionProviderContext";

interface SessionProviderProps {
  children: React.ReactNode;
}

function SessionProvider({ children }: SessionProviderProps) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    SUPABASE_CLIENT.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = SUPABASE_CLIENT.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await SUPABASE_CLIENT.auth.signOut();
  };

  return (
    <SessionProviderContext.Provider
      value={{
        session,
        logout,
      }}
    >
      {children}
    </SessionProviderContext.Provider>
  );
}

export default SessionProvider;
