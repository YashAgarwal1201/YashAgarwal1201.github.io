import React, { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { Header } from "./../../Components/Header/Header";
import "./Content.scss";
import { useAppContext } from "../../Services/AppContext";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Feedback from "../../Components/Feedback/Feedback";
import MoreDetailsDialog from "../../Components/About/MoreDetailsDialog/MoreDetailsDialog";
import FeedbackFormDialog from "../../Components/Feedback/FeedbackFormDialog/FeedbackFormDialog";
import MenuDialog from "../../Components/Menu/MenuDialog";

type KeyMapProp = {
  [key: string]: string;
};

const Content: React.FC = () => {
  const { state, dispatch, showToast } = useAppContext();
  const [selectedButton, setSelectedButton] = useState<string>("home");
  const [expandAboutDialog, setExpandAboutDialog] = useState(false);
  const [expandFeedbackDialog, setExpandFeedbackDialog] = useState(false);
  const [showMenuDialog, setShowMenuDialog] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
    home: homeRef,
    about: aboutRef,
    feedback: feedbackRef,
  };

  const handleButtonClick = (section: string) => {
    setSelectedButton(section);
    const targetRef = sectionRefs[section]; //eval(`${section}Ref`);
    targetRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       switch (entry.target) {
    //         case homeRef.current:
    //           setSelectedButton("home");
    //           break;
    //         case aboutRef.current:
    //           setSelectedButton("about");
    //           break;
    //         case feedbackRef.current:
    //           setSelectedButton("feedback");
    //           break;
    //         default:
    //           break;
    //       }
    //     }
    //   });
    // }, observerOptions);

    const observer = new IntersectionObserver((entries) => {
      debounce(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target) {
              case homeRef.current:
                setSelectedButton("home");
                break;
              case aboutRef.current:
                setSelectedButton("about");
                break;
              case feedbackRef.current:
                setSelectedButton("feedback");
                break;
              default:
                break;
            }
          }
        });
      }, 100)(); // Adjust debounce delay as needed
    }, observerOptions);

    observer.observe(homeRef.current!);
    observer.observe(aboutRef.current!);
    observer.observe(feedbackRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleKeyPress = (event: KeyboardEvent) => {
    const keyMap: KeyMapProp = {
      H: "home",
      A: "about",
      W: "about",
      F: "feedback",
      K: "keyboardShortcuts",
      M: "menu",
      E: "easyMode",
      // T: "theme",
    };

    const key = event.key?.toUpperCase();
    const section = keyMap[key];

    if (section && event.shiftKey) {
      // handleButtonClick(section);

      // Uncomment the following line if you want to display something with the "K" key
      if (section === "menu" || section === "keyboardShortcuts") {
        setShowMenuDialog(!showMenuDialog);
      } else if (section === "easyMode") {
        dispatch({
          type: "SET_EASY_MODE",
          payload: state.easyMode ? false : true,
        });
        showToast(
          "success",
          "Success",
          `Easy mode turned ${state.easyMode ? "Off" : "On"}`
        );
      } else {
        handleButtonClick(section);
      }
    }
  };

  useEffect(() => {
    // Add event listener for key presses
    window.addEventListener("keydown", handleKeyPress);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className={`w-full h-[100dvh] flex flex-col-reverse lg:flex-row items-center bg-color1`}
    >
      <Header
        selectedButton={selectedButton}
        setSelectedButton={handleButtonClick}
        showMenuDialog={showMenuDialog}
        setShowMenuDialog={setShowMenuDialog}
      />

      <div
        className={`contentBody h-full w-full text-color5 overflow-y-auto snap-y snap-mandatory`}
      >
        <Home reference={homeRef} />
        <About
          reference={aboutRef}
          setExpandAboutDialog={setExpandAboutDialog}
        />
        <Feedback
          reference={feedbackRef}
          setExpandFeedbackDialog={setExpandFeedbackDialog}
        />
      </div>
      {expandAboutDialog && (
        <MoreDetailsDialog
          expandAboutDialog={expandAboutDialog}
          setExpandAboutDialog={setExpandAboutDialog}
        />
      )}
      {expandFeedbackDialog && (
        <FeedbackFormDialog
          expandFeedbackDialog={expandFeedbackDialog}
          setExpandFeedbackDialog={setExpandFeedbackDialog}
        />
      )}
      {showMenuDialog && (
        <MenuDialog
          showMenuDialog={showMenuDialog}
          setShowMenuDialog={setShowMenuDialog}
        />
      )}
    </div>
  );
};

export default Content;
