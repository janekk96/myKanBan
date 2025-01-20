import style from "./MainWrapper.module.css";

import { SidebarProvider } from "../../ui/sidebar";
import SidabarNav from "../../SidebarNav/SidebarNav";
import AppRouter from "../../Router/Router";

function MainWrapper() {
  return (
    <div className={style.wrapper}>
      <SidebarProvider>
        <SidabarNav />
        <div className={style.content}>
          <AppRouter />
        </div>
      </SidebarProvider>
    </div>
  );
}

export default MainWrapper;
