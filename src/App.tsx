import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { Toast } from "primereact/toast";
// import { useAppContext } from "./Context/AppContext";
// import useAxiosInterceptor from "./interceptor/interceptor";
// import { useState } from "react";
import "./App.scss";

function App() {
  // const { dispatch, state } = useAppContext();
  const myToast = useRef<Toast>(null);

  useEffect(() => {
    // dispatch?.({
    //   type: "SET_TOAST_REF",
    //   payload: myToast.current as Toast,
    // });
  }, []);

  // useEffect(() => {
  //   sessionStorage.setItem("ObjectCountData", JSON.stringify(state));
  // }, [state]);

  return (
    <div className="w-screen h-[100dvh] bg-[#F7F7F7]">
      <Toast ref={myToast} />
      <Outlet />
    </div>
  );
}

export default App;
