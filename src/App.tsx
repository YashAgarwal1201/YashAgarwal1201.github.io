import { useEffect, useRef } from "react";

import Cookies from "js-cookie";
import { Toast } from "primereact/toast";
import { Outlet } from "react-router-dom";

import { useAppContext } from "./Services/AppContext";
import "./App.scss";
import { useMsgAppContext } from "./Services/MessagesContextAndInterfaces/MessagesContext";
// import ErrorBoundary from "./Services/ErrorBoundary";

function App() {
  const { dispatch, state } = useAppContext();
  const { messageState } = useMsgAppContext();
  const myToast = useRef<Toast>(null);

  useEffect(() => {
    dispatch?.({
      type: "SET_TOAST_REF",
      payload: myToast.current as Toast,
    });

    if (!state.messages) {
      localStorage.removeItem(`yashAppData`);
    }
  }, []);

  useEffect(() => {
    document
      .querySelector("html")
      ?.setAttribute("data-theme", state.themeSelected);

    const rootStyle = getComputedStyle(document.documentElement);
    // Get the value of the CSS variable
    const color1 = rootStyle.getPropertyValue("--color1").trim(); // trim to remove possible whitespace
    // Set the content attribute of the meta tag
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", color1);
  }, [state.themeSelected]);

  // useEffect(() => {
  //   localStorage.setItem(`yashAppData`, JSON.stringify(state));
  // }, [state]);

  // useEffect(() => {
  //   Cookies.set("yashAppData", JSON.stringify(state), { expires: 1 / 24 }); // Expires in 7 days
  // }, [state]);

  useEffect(() => {
    // Check for the cookie ID
    const cookieId = Cookies.get("appId");
    const localStorageData = localStorage.getItem("yashAppData");

    if (cookieId) {
      // Update localStorage if cookie ID is present
      if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);
        if (parsedData) {
          localStorage.setItem("yashAppData", JSON.stringify(state));
        }
      } else {
        localStorage.setItem("yashAppData", JSON.stringify(state));
      }
    } else {
      // Clear localStorage if cookie ID is not present
      localStorage.clear();
      // Generate a new unique ID and set it in the cookie
      const newId = Date.now().toString();
      Cookies.set("appId", newId, { expires: 2 / 24 }); // Set cookie for 7 days
      localStorage.setItem("yashAppData", JSON.stringify(state));
    }
  }, [state]);

  useEffect(() => {
    sessionStorage.setItem("yashAppMsgData", JSON.stringify(messageState));
  }, [messageState]);

  return (
    // <ErrorBoundary>
    <div className="w-screen h-[100dvh]">
      <Toast ref={myToast} />
      <Outlet />
    </div>
    // </ErrorBoundary>
  );
}

export default App;
