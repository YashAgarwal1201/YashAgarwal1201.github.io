import { lazy } from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./../App";

// Lazy Loaded Components
const ContentPage = lazy(() => import("./../Pages/Content/Content"));
const PageNotFound = lazy(() => import("../Pages/PageNotFound/PageNotFound"));

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<ContentPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default Router;
