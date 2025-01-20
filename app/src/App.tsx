import "./App.css";

import { useContext } from "react";
import { SessionProviderContext } from "./Providers/SessionProvider/SessionProviderContext";
import MainWrapper from "./components/Layouts/MainWrapper/MainWrapper";
import Login from "./components/Login";

function App() {
  const sessionContext = useContext(SessionProviderContext);
  if (!sessionContext?.session) {
    return <Login />;
  } else {
    return <MainWrapper />;
  }
}

export default App;
