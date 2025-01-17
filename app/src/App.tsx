import "./App.css";

import { useContext } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { SUPABASE_CLIENT } from "./Consts/supabase";
import { SessionProviderContext } from "./Providers/SessionProvider/SessionProviderContext";
import { Button } from "./components/ui/button";
import SidebarNav from "./components/SidebarNav";

function App() {
  const sessionContext = useContext(SessionProviderContext);
  if (!sessionContext?.session) {
    return (
      <div className="login">
        <h1>My KanBan</h1>
        <Auth
          supabaseClient={SUPABASE_CLIENT}
          appearance={{ theme: ThemeSupa }}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <SidebarNav />
        <header className="App-header">
          <p>Logged in as {sessionContext.session.user.email} </p>
          <Button onClick={sessionContext.logout}>Logout</Button>
        </header>
      </div>
    );
  }
}

export default App;
