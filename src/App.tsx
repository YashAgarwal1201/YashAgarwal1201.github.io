import { useEffect, useRef } from "react";

import { Toast } from "primereact/toast";
import { Outlet } from "react-router-dom";

import { useAppContext } from "./Services/AppContext";
import "./App.scss";
import ErrorBoundary from "./Services/ErrorBoundary";

function App() {
  const { dispatch, state } = useAppContext();
  const myToast = useRef<Toast>(null);

  useEffect(() => {
    dispatch?.({
      type: "SET_TOAST_REF",
      payload: myToast.current as Toast,
    });
  }, []);

  useEffect(() => {
    document
      .querySelector("html")
      ?.setAttribute("data-theme", state.themeSelected);
  }, [state.themeSelected]);

  useEffect(() => {
    localStorage.setItem(`yashAppData`, JSON.stringify(state));
  }, [state]);

  return (
    <ErrorBoundary>
      <div className="w-screen h-[100dvh]">
        <Toast ref={myToast} />
        <Outlet />
      </div>
    </ErrorBoundary>
  );
}

export default App;
