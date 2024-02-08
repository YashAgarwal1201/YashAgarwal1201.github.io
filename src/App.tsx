import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { Toast } from "primereact/toast";
import { useAppContext } from "./Services/AppContext";
// import { useState } from "react";
import "./App.scss";

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
    localStorage.setItem(`yashAppData`, JSON.stringify(state)); //(`yashAppData_${window.name}`, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    document
      .querySelector("html")
      ?.setAttribute("data-theme", state.modeSelected);
  }, [state.modeSelected]);

  // if (!window.name) {
  //   window.name = Math.random().toString(36).substring(7);
  // }

  // console.log("Tab identifier:", window.name);

  return (
    <div className="w-screen h-[100dvh]">
      <Toast ref={myToast} />
      <Outlet />
    </div>
  );
}

export default App;
