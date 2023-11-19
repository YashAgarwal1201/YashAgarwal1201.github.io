import React, { useEffect, useRef, useState } from "react";
import { Header } from "./../../Components/Header/Header";
import "./Content.scss";
import { useAppContext } from "../../Services/AppContext";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Feedback from "../../Components/Feedback/Feedback";

const Content = () => {
  const { state } = useAppContext();
  const [selectedButton, setSelectedButton] = useState<string>("home");

  // const themeVal = state.modeSelected as string
  // console.log(themeVal)

  // Create refs for the components
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const feedbackRef = useRef(null);

  useEffect(() => {
    // Scroll to the selected component when the selectedButton changes
    switch (selectedButton) {
      case "home":
        homeRef?.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef?.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "feedback":
        feedbackRef?.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }, [selectedButton]);

  return (
    <div
      className={`w-screen h-[100dvh] flex flex-col-reverse md:flex-row items-center bg-color1`}
    >
      <Header
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />

      <div
        className={`h-full w-full p-1 text-color5 overflow-y-auto snap-y`}
      >
        {/* <p>{selectedButton}</p> */}
        <Home reference={homeRef} />
        <About reference={aboutRef} />
        <Feedback reference={feedbackRef} />
      </div>
    </div>
  );
};

export default Content;
