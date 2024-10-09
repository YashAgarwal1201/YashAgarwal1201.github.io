import { useEffect, useRef } from "react";

import Cookies from "js-cookie";
import { Toast } from "primereact/toast";
import { Outlet } from "react-router-dom";

import { useAppContext } from "./Services/AppContext";
import "./App.scss";
import { useMsgAppContext } from "./Services/MessagesContextAndInterfaces/MessagesContext";

function App() {
  const { dispatch, state } = useAppContext();
  const { messageState } = useMsgAppContext();
  const myToast = useRef<Toast>(null);

  useEffect(() => {
    dispatch?.({
      type: "SET_TOAST_REF",
      payload: myToast.current as Toast,
    });

    if (!messageState.messages) {
      sessionStorage.removeItem(`yashAppData`);
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

  useEffect(() => {
    // Check for the cookie ID
    const cookieId = Cookies.get("appId");
    const localStorageData = localStorage.getItem("yashAppData");

    if (cookieId) {
      // Update localStorage if cookie ID is present
      try {
        const parsedData = localStorageData
          ? JSON.parse(localStorageData)
          : null;

        // Only update localStorage if the state has changed
        if (
          !parsedData ||
          JSON.stringify(parsedData) !== JSON.stringify(state)
        ) {
          localStorage.setItem("yashAppData", JSON.stringify(state));
        }
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        localStorage.removeItem("yashAppData"); // Optionally clear corrupt data
      }
    } else {
      // Clear localStorage if cookie ID is not present
      localStorage.clear();

      // Generate a new unique ID and set it in the cookie (expires in 2 days)
      const newId = Date.now().toString();
      Cookies.set("appId", newId, { expires: 2 });

      // Set localStorage with the current state
      localStorage.setItem("yashAppData", JSON.stringify(state));
    }
  }, [state]);

  useEffect(() => {
    // Compare messageState with sessionStorage to avoid unnecessary updates
    const existingMsgData = sessionStorage.getItem("yashAppMsgData");

    if (existingMsgData !== JSON.stringify(messageState)) {
      sessionStorage.setItem("yashAppMsgData", JSON.stringify(messageState));
    }
  }, [messageState]);

  return (
    <div className="w-screen h-[100dvh] bg-color1">
      <Toast ref={myToast} />
      <Outlet />
    </div>
  );
}

export default App;
