import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/routes.tsx";
import { AppContextProvider } from "./Services/AppContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <RouterProvider router={Router} />
  </AppContextProvider>
);
