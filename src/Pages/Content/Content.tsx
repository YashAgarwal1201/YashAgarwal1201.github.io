import React, { useEffect, useRef, useState } from "react";

// import { debounce } from "lodash";

import "./Content.scss";
import MainChatComponent from "../../Components/Chat/MainChatComponent";
import FeedbackFormDialog from "../../Components/FeedbackFormDialog/FeedbackFormDialog";
import MenuDialog from "../../Components/Menu/MenuDialog";
import ProfileComponent from "../../Components/Profile/ProfileComponent";
import { ABOUT_ME } from "../../Data/Data";
import { useAppContext } from "../../Services/AppContext";
import Header from "./../../Components/Header/Header";

type KeyMapProp = {
  [key: string]: string;
};

const Content: React.FC = () => {
  const { state, setSelectedContent, setShowFeedbackDialog } = useAppContext();
  const [showMenuDialog, setShowMenuDialog] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [openMenuPanel, setOpenMenuPanel] = useState(-1);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
    home: homeRef,
    about: aboutRef,
    feedback: feedbackRef,
  };

  const handleButtonClick = (section: string) => {
    setSelectedContent(section);
    const targetRef = sectionRefs[section];
    targetRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // useEffect(() => {
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.5, // Adjust this threshold as needed
  //   };

  //   // const observer = new IntersectionObserver((entries) => {
  //   //   entries.forEach((entry) => {
  //   //     if (entry.isIntersecting) {
  //   //       switch (entry.target) {
  //   //         case homeRef.current:
  //   //           setSelectedButton("home");
  //   //           break;
  //   //         case aboutRef.current:
  //   //           setSelectedButton("about");
  //   //           break;
  //   //         case feedbackRef.current:
  //   //           setSelectedButton("feedback");
  //   //           break;
  //   //         default:
  //   //           break;
  //   //       }
  //   //     }
  //   //   });
  //   // }, observerOptions);

  //   const observer = new IntersectionObserver((entries) => {
  //     debounce(() => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           switch (entry.target) {
  //             case homeRef.current: {
  //               setSelectedContent("home");
  //               break;
  //             }
  //             case aboutRef.current: {
  //               setSelectedContent("about");
  //               break;
  //             }
  //             case feedbackRef.current: {
  //               setSelectedContent("feedback");
  //               break;
  //             }
  //             default:
  //               break;
  //           }
  //         }
  //       });
  //     }, 100)();
  //   }, observerOptions);

  //   observer.observe(homeRef.current!);
  //   observer.observe(aboutRef.current!);
  //   observer.observe(feedbackRef.current!);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  const handleKeyPress = (event: KeyboardEvent) => {
    const keyMap: KeyMapProp = {
      A: "appearance",
      H: "home",
      C: "contact",
      W: "work",
      O: "other projects",
      F: "feedback",
      K: "keyboardShortcuts",
      M: "menu",
      E: "education",
      T: "theme",
      P: "profileView",
      Z: "easyMode",
    };

    const key = event.key?.toUpperCase();
    const section = keyMap[key];

    if (section && event.shiftKey) {
      // handleButtonClick(section);

      // Uncomment the following line if you want to display something with the "K" key
      if (section === "menu") {
        setShowMenuDialog(!showMenuDialog);
        setOpenMenuPanel(-1);
      } else if (section === "appearance") {
        setShowMenuDialog(true);
        setOpenMenuPanel(4);
      } else if (section == "theme") {
        setShowMenuDialog(true);
        setOpenMenuPanel(0);
      } else if (section === "easyMode") {
        setShowMenuDialog(true);
        setOpenMenuPanel(1);
      } else if (section === "profileView") {
        setSelectedContent("profile");
      } else if (
        section === "work" ||
        section === "other projects" ||
        section === "contact"
      ) {
        setSelectedTab(
          ABOUT_ME?.findIndex((val) =>
            val.header?.toLowerCase()?.includes(section)
          )
        );
        setSelectedContent("profile");
      } else if (section === "home") {
        setSelectedContent("default");
      } else if (section === "feedback") {
        setShowFeedbackDialog(true);
      } else if (section === "keyboardShortcuts") {
        setShowMenuDialog(true);
        // setShowKeyboardShortcuts(true);
        setOpenMenuPanel(2);
      } else {
        handleButtonClick(section);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const scrollToSavedSection = () => {
      const sectionRef = sectionRefs[state.selectedContentBtn];
      if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    scrollToSavedSection();
  }, []);

  return (
    <div
      className={`w-full h-[100dvh] flex flex-col lg:flex-row items-center bg-color1`}
    >
      <Header
        showMenuDialog={showMenuDialog}
        setShowMenuDialog={setShowMenuDialog}
      />

      <div
        className={`contentBody h-full w-full text-color5 overflow-y-auto snap-y snap-mandatory`}
      >
        {/* <Home reference={homeRef} />
        <About
          reference={aboutRef}
          setExpandAboutDialog={setExpandAboutDialog}
        />
        <Feedback
          reference={feedbackRef}
          setExpandFeedbackDialog={setExpandFeedbackDialog}
        /> */}

        {state.selectedContentBtn !== "profile" ? (
          <MainChatComponent />
        ) : (
          <ProfileComponent selectedTab={selectedTab} />
        )}
      </div>

      <FeedbackFormDialog />

      <MenuDialog
        showMenuDialog={showMenuDialog}
        openMenuPanel={openMenuPanel}
        setOpenMenuPanel={setOpenMenuPanel}
        setShowMenuDialog={setShowMenuDialog}
      />
    </div>
  );
};

export default Content;
