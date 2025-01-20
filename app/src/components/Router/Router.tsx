import { Routes, Route } from "react-router-dom";
import { menu } from "@/Consts/menu";
import ContentWrapper from "../Layouts/ContentWrapper/ContentWrapper";

function AppRouter() {
  return (
    <Routes>
      {menu.map((group) =>
        group.items.map((item) => (
          <Route
            key={item.href}
            path={item.href}
            element={
              <ContentWrapper topBar={item?.topBar || <div>{item.title}</div>}>
                {item.element}
              </ContentWrapper>
            }
          />
        ))
      )}
    </Routes>
  );
}

export default AppRouter;
