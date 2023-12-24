// import { useEffect, useRef, useState } from "react";
// import { Header } from "./../../Components/Header/Header";
// import "./Content.scss";
// // import { useAppContext } from "../../Services/AppContext";
// import Home from "../../Components/Home/Home";
// import About from "../../Components/About/About";
// import Feedback from "../../Components/Feedback/Feedback";
// import MoreDetailsDialog from "../../Components/About/MoreDetailsDialog/MoreDetailsDialog";
// import FeedbackFormDialog from "../../Components/Feedback/FeedbackFormDialog/FeedbackFormDialog";

// const Content = () => {
//   // const { state, dispatch, showToast } = useAppContext();
//   const [selectedButton, setSelectedButton] = useState<string>("home");
//   const [expandAboutDialog, setExpandAboutDialog] = useState(false);
//   const [expandFeedbackDialog, setExpandFeedbackDialog] = useState(false);

//   const homeRef = useRef();
//   const aboutRef = useRef();
//   const feedbackRef = useRef();

//   // useEffect(() => {
//   //   // Scroll to the selected component when the selectedButton changes
//   //   switch (selectedButton) {
//   //     case "home":
//   //       // homeRef?.current.scrollIntoView({ behavior: "smooth" });
//   //       window.scrollTo({ top: homeRef.current.offsetTop, behavior: "smooth" });
//   //       break;
//   //     case "about":
//   //       aboutRef?.current.scrollIntoView({ behavior: "smooth" });
//   //       break;
//   //     case "feedback":
//   //       feedbackRef?.current.scrollIntoView({ behavior: "smooth" });
//   //       break;
//   //     default:
//   //       break;
//   //   }
//   // }, [selectedButton]);

//   const handleButtonClick = (section) => {
//     setSelectedButton(section);
//     const targetRef = eval(`${section}Ref`);
//     targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5, // Adjust this threshold as needed
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           switch (entry.target) {
//             case homeRef.current:
//               setSelectedButton("home");
//               break;
//             case aboutRef.current:
//               setSelectedButton("about");
//               break;
//             case feedbackRef.current:
//               setSelectedButton("feedback");
//               break;
//             default:
//               break;
//           }
//         }
//       });
//     }, observerOptions);

//     observer.observe(homeRef.current);
//     observer.observe(aboutRef.current);
//     observer.observe(feedbackRef.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div
//       className={`w-screen h-[100dvh] flex flex-col-reverse lg:flex-row items-center bg-color1`}
//     >
//       <Header
//         selectedButton={selectedButton}
//         setSelectedButton={handleButtonClick}
//       />

//       <div
//         className={`h-full w-full text-color5 overflow-y-auto snap-y snap-mandatory`}
//       >
//         <Home reference={homeRef} />
//         <About
//           reference={aboutRef}
//           setExpandAboutDialog={setExpandAboutDialog}
//         />
//         <Feedback
//           reference={feedbackRef}
//           setExpandFeedbackDialog={setExpandFeedbackDialog}
//         />
//       </div>
//       {expandAboutDialog && (
//         <MoreDetailsDialog
//           expandAboutDialog={expandAboutDialog}
//           setExpandAboutDialog={setExpandAboutDialog}
//         />
//       )}
//       {expandFeedbackDialog && (
//         <FeedbackFormDialog
//           expandFeedbackDialog={expandFeedbackDialog}
//           setExpandFeedbackDialog={setExpandFeedbackDialog}
//         />
//       )}
//     </div>
//   );
// };

// export default Content;


import React, { useEffect, useRef, useState } from "react";
import { Header } from "./../../Components/Header/Header";
import "./Content.scss";
// import { useAppContext } from "../../Services/AppContext";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Feedback from "../../Components/Feedback/Feedback";
import MoreDetailsDialog from "../../Components/About/MoreDetailsDialog/MoreDetailsDialog";
import FeedbackFormDialog from "../../Components/Feedback/FeedbackFormDialog/FeedbackFormDialog";

const Content: React.FC = () => {
  // const { state, dispatch, showToast } = useAppContext();
  const [selectedButton, setSelectedButton] = useState<string>("home");
  const [expandAboutDialog, setExpandAboutDialog] = useState(false);
  const [expandFeedbackDialog, setExpandFeedbackDialog] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (section: string) => {
    setSelectedButton(section);
    const targetRef = eval(`${section}Ref`);
    targetRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
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
    }, observerOptions);

    observer.observe(homeRef.current!);
    observer.observe(aboutRef.current!);
    observer.observe(feedbackRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`w-screen h-[100dvh] flex flex-col-reverse lg:flex-row items-center bg-color1`}>
      <Header selectedButton={selectedButton} setSelectedButton={handleButtonClick} />

      <div className={`contentBody h-full w-full text-color5 overflow-y-auto snap-y snap-mandatory`}>
        <Home reference={homeRef} />
        <About reference={aboutRef} setExpandAboutDialog={setExpandAboutDialog} />
        <Feedback reference={feedbackRef} setExpandFeedbackDialog={setExpandFeedbackDialog} />
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
    </div>
  );
};

export default Content;
