import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./Providers/ThemeProvider/ThemeProvider.tsx";
import SessionProvider from "./Providers/SessionProvider/SessionProvider.tsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <SessionProvider>
        <Router>
          <App />
        </Router>
      </SessionProvider>
    </ThemeProvider>
  </StrictMode>
);
