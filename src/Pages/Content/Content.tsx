import React, { useEffect, useRef, useState } from "react";
import { Header } from "./../../Components/Header/Header";
import "./Content.scss";
import { useAppContext } from "../../Services/AppContext";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Feedback from "../../Components/Feedback/Feedback";
import { Dialog } from "primereact/dialog";

const Content = () => {
  const { state } = useAppContext();
  const [selectedButton, setSelectedButton] = useState<string>("home");
  const [expandAboutDialog, setExpandAboutDialog] = useState(false);

  // Create refs for the components
  const homeRef = useRef(null);
  const aboutRef = useRef();
  const feedbackRef = useRef();

  useEffect(() => {
    // Scroll to the selected component when the selectedButton changes
    switch (selectedButton) {
      case "home":
        homeRef.current
          ? homeRef.current?.scrollIntoView({ behavior: "smooth" })
          : "";
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

      <div className={`h-full w-full text-color5 overflow-y-auto snap-y`}>
        {/* <p>{selectedButton}</p> */}
        <Home reference={homeRef} />
        <About
          reference={aboutRef}
          setExpandAboutDialog={setExpandAboutDialog}
        />
        <Feedback reference={feedbackRef} />
      </div>
      {expandAboutDialog && (
        <div className="relative">
          <Dialog
            visible={expandAboutDialog}
            onHide={() => setExpandAboutDialog(!expandAboutDialog)}
            draggable={false}
            header={<div className="text-color5">{state.modalContent.header}</div>}
            className="aboutDialog w-full md:w-[65%] h-full md:h-[80%] absolute bottom-0 md:bottom-auto"
          >
            <div className="h-full p-2 md:p-4 flex flex-col gap-y-3 text-color5 bg-color2 rounded-md overflow-y-auto">
              {state.modalContent.body.map((values: any, key: any) => (
                <>
                  <h3 className="w-fit pb-1 text-base md:text-lg font-medium border-b-2 border-color4">
                    {values.year}
                  </h3>
                  <div className="flex">
                    <p className="ml-12 md:text-base">{values.description}</p>
                  </div>
                </>
              ))}
            </div>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default Content;
