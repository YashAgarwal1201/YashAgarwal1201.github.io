import { useEffect, useRef, useState } from "react";
import { Header } from "./../../Components/Header/Header";
import "./Content.scss";
// import { useAppContext } from "../../Services/AppContext";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Feedback from "../../Components/Feedback/Feedback";
import MoreDetailsDialog from "../../Components/About/MoreDetailsDialog/MoreDetailsDialog";
import FeedbackFormDialog from "../../Components/Feedback/FeedbackFormDialog/FeedbackFormDialog";

const Content = () => {
  // const { state, dispatch, showToast } = useAppContext();
  const [selectedButton, setSelectedButton] = useState<string>("home");
  const [expandAboutDialog, setExpandAboutDialog] = useState(false);
  const [expandFeedbackDialog, setExpandFeedbackDialog] = useState(false);

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
        // <Dialog
        //   visible={expandFeedbackDialog}
        //   onHide={() => setExpandFeedbackDialog(false)}
        //   draggable={false}
        // ></Dialog>
        <FeedbackFormDialog
          expandFeedbackDialog={expandFeedbackDialog}
          setExpandFeedbackDialog={setExpandFeedbackDialog}
        />
      )}
    </div>
  );
};

export default Content;
