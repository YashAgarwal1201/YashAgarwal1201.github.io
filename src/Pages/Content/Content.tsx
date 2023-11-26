import { useEffect, useRef, useState } from "react";
import { Header } from "./../../Components/Header/Header";
import "./Content.scss";
// import { useAppContext } from "../../Services/AppContext";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Feedback from "../../Components/Feedback/Feedback";
// import { Dialog } from "primereact/dialog";
import MoreDetailsDialog from "../../Components/About/MoreDetailsDialog/MoreDetailsDialog";

const Content = () => {
  // const { state, dispatch, showToast } = useAppContext();
  const [selectedButton, setSelectedButton] = useState<string>("home");
  const [expandAboutDialog, setExpandAboutDialog] = useState(false);

  const homeRef = useRef();
  const aboutRef = useRef();
  const feedbackRef = useRef();

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
      className={`w-screen h-[100dvh] flex flex-col-reverse lg:flex-row items-center bg-color1`}
    >
      <Header
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />

      <div
        className={`h-full w-full text-color5 overflow-y-auto snap-y snap-mandatory`}
      >
        <Home reference={homeRef} />
        <About
          reference={aboutRef}
          setExpandAboutDialog={setExpandAboutDialog}
        />
        <Feedback reference={feedbackRef} />
      </div>
      {expandAboutDialog && (
        <MoreDetailsDialog
          expandAboutDialog={expandAboutDialog}
          setExpandAboutDialog={setExpandAboutDialog}
        />
      )}
    </div>
  );
};

export default Content;
