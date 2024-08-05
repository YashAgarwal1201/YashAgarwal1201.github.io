import { useEffect, useRef, useState } from "react";

import { Button } from "primereact/button";
// import TypeIt from "typeit";

import "./About.scss";

import ChatComponent from "./ChatComponent/ChatComponent";
import ContactLinks from "./ContactLinks/ContactLinks";
import OtherProjects from "./OtherProjects/OtherProject";
import {
  aboutInfo,
  // CHAT_USER_OPTIONS,
  // primaryInfo,
  // WELCOME_MSG,
} from "../../Data/Data";
import { useAppContext } from "../../Services/AppContext";
import {
  // AboutMessage,
  AboutProps,
  ModalContent,
} from "../../Services/Interfaces";

// const TypeItText = ({ text, speed = 50 }) => {
//   const textRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (textRef.current) {
//       new TypeIt(textRef.current, {
//         strings: [text],
//         speed,
//         waitUntilVisible: true,
//         loop: false,
//       }).go();
//     }
//   }, [text, speed]);

//   return <div ref={textRef} />;
// };

// const ScrollLeftRightBtns = ({
//   isScrollLeftDisabled,
//   isScrollRightDisabled,
//   scrollLeftRight,
// }: {
//   isScrollLeftDisabled: boolean;
//   isScrollRightDisabled: boolean;
//   scrollLeftRight: (offset: number) => void;
// }) => {
//   return (
//     <>
//       <Button
//         disabled={isScrollLeftDisabled}
//         icon={<span className="material-symbols-rounded">arrow_back_ios</span>}
//         rounded
//         className="bg-color3 text-color1 shadow-md mdl:shadow-none"
//         onClick={() => scrollLeftRight(-200)}
//         title="scroll left"
//       />
//       <Button
//         disabled={isScrollRightDisabled}
//         icon={
//           <span className="material-symbols-rounded">arrow_forward_ios</span>
//         }
//         rounded
//         className="bg-color3 text-color1 shadow-md mdl:shadow-none"
//         onClick={() => scrollLeftRight(200)}
//         title="scroll right"
//       />
//     </>
//   );
// };

// const responses = {
//   greeting: "Hello! How can I help you today?",
//   work: "I have worked at various companies, including XYZ Corp and ABC Ltd.",
//   education:
//     "I graduated from the University of Somewhere with a degree in Computer Science.",
//   contact: "You can reach me at email@example.com.",
//   projects:
//     "I have worked on several projects, including a chat application and a portfolio website.",
// };

const About = ({ reference, setExpandAboutDialog }: AboutProps) => {
  const {
    state,
    setModalContent,
    // setSelectedAboutSectionBtn,
    // setMessages,
    // showToast,
  } = useAppContext();

  const containerRef = useRef<HTMLDivElement | null>(null);
  // const textRef = useRef(null);
  // const lastPairRef = useRef<HTMLDivElement>(null);

  const [isScrollLeftDisabled, setIsScrollLeftDisabled] = useState(true);
  const [isScrollRightDisabled, setIsScrollRightDisabled] = useState(false);
  // const [showOptions, setShowOptions] = useState(true);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [lessThan768px, setLessThan768px] = useState(false);

  const detailsSubContainersStyles =
    "w-[97%] h-fit flex-shrink-0 snap-center snap-always";

  const handleDotClick = (index: number) => {
    const container = containerRef.current;
    if (container) {
      // Assuming all your subcontainers have the same width
      // and are directly adjacent to each other in the scroll container
      const targetScrollPosition = index * container.clientWidth;
      container.scrollTo({ left: targetScrollPosition, behavior: "smooth" });

      // Update the disabled state for the scroll buttons if needed
      setIsScrollLeftDisabled(index === 0);
      setIsScrollRightDisabled(index === Object.keys(aboutInfo).length - 1);
    }
  };

  const scrollLeftRight = (offset: number) => {
    const container = containerRef.current;

    if (container) {
      container.scrollBy({ left: offset, behavior: "smooth" });

      const isScrollLeftDisabledVar = container.scrollLeft <= 0;
      setIsScrollLeftDisabled(isScrollLeftDisabledVar);

      const isScrollRightDisabledVar =
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth - 1;
      setIsScrollRightDisabled(isScrollRightDisabledVar);
    }
  };

  const handleExpandAboutDialogBtn = (content: ModalContent) => {
    setExpandAboutDialog(true);
    setModalContent(content);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (state.selectedContentBtn === "about")
      switch (event.key) {
        case "ArrowLeft":
          scrollLeftRight(-200);
          break;
        case "ArrowRight":
          scrollLeftRight(200);
          break;
        default:
          // Do nothing for other keys
          break;
      }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Cleanup function to remove the event listener
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [scrollLeftRight]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container && container.parentElement) {
        const isScrollLeftDisabledVar = container.scrollLeft <= 0;
        setIsScrollLeftDisabled(isScrollLeftDisabledVar);

        const isScrollRightDisabledVar =
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth - 1;
        setIsScrollRightDisabled(isScrollRightDisabledVar);

        const index = Math.round(container.scrollLeft / container.clientWidth);
        setActiveDotIndex(index);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setLessThan768px(window.innerHeight < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   if (state.messages?.length > 0) {
  //     // console.log(55);
  //     scrollToLastPair();
  //   }
  // }, []);

  // const getResponse = (query: string) => {
  //   if (query.includes("about yourself")) {
  //     // Object.keys(CHAT_USER_OPTIONS).map((val, key) =>
  //     //   CHAT_USER_OPTIONS[key].title.includes("about yourself")
  //     //     ? (CHAT_USER_OPTIONS[key].visible = false)
  //     //     : ""
  //     // );
  //     return `Hey, this is ${primaryInfo.name}. I work as an ${primaryInfo.currentPosition} @ ${primaryInfo.currentOrganisation}`;
  //   }
  //   return query;
  // };

  // const handleOptionClick = (query: string) => {
  //   // console.log("option:", option);
  //   scrollToLastPair();
  //   setShowOptions(false);

  //   // Add user's selected option as a message
  //   const userMessage: AboutMessage = {
  //     content: query,
  //     id: Date.now().toString(),
  //     role: "user",
  //   };

  //   const response =
  //     getResponse(query) || "Sorry, I don't have information on that.";

  //   // Add bot's response as a message
  //   const botMessage: AboutMessage = {
  //     content: response,
  //     id: (Date.now() + 1).toString(), // Ensure unique ID
  //     role: "bot",
  //   };

  //   // Update the messages state with both messages
  //   setMessages([...state.messages, userMessage, botMessage]);
  // };

  // const groupMessages = (messages: AboutMessage[]) => {
  //   const grouped: AboutMessage[][] = [];
  //   for (let i = 0; i < messages?.length; i += 2) {
  //     grouped?.push(messages?.slice(i, i + 2));
  //   }
  //   return grouped;
  // };

  // const groupedMessages = Array.isArray(state.messages)
  //   ? groupMessages(state.messages)
  //   : [];

  // const scrollToLastPair = () => {
  //   lastPairRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div
      ref={reference}
      className="w-full h-full p-2 md:pb-1 md:pr-1 flex justify-center items-center snap-center snap-always"
    >
      <div
        className={`w-full mdl:w-1/2 h-full md:px-5 ${
          lessThan768px ? "pt-5 sm:pt-10" : "pt-10 sm:pt-20"
        } flex flex-col justify-start items-center gap-y-5`}
      >
        <h1 className="w-full text-3xl sm:text-4xl lg:text-6xl text-color3 font-heading select-none">
          A little bit,
          <br />
          <span className="font-subheading text-color5">about me...</span>
        </h1>
        <p className="w-full text-base sm:text-lg lg:text-xl text-right text-color4 font-content select-none">
          my education, working experience,
          <br />
          contact and resume
        </p>
        <div className="block mdl:hidden relative w-full h-full">
          <div
            className="w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
            id="aboutContent"
            ref={containerRef}
          >
            <div
              className={`${
                lessThan768px ? "mt-2" : "mt-10 sm:mt-16"
              } flex space-x-3`}
            >
              {aboutInfo.map((values, key) => {
                // if (values.header) {
                return (
                  <div className={detailsSubContainersStyles} key={key}>
                    <h2
                      className={`${
                        state.easyMode ? "mr-2 ml-0 text-right" : "ml-2 mr-0"
                      } text-2xl md:text-3xl font-medium text-color3 font-heading select-none`}
                    >
                      {values.header}
                    </h2>
                    <div
                      className={` ${
                        activeDotIndex === key ? "active-section" : ""
                      } ${
                        lessThan768px
                          ? "h-[225px] sm:h-[245px]"
                          : "h-[245px] sm:h-[275px]"
                      } p-2 flex flex-col gap-y-3 justify-center bg-color2 rounded-md relative border-2 border-transparent`}
                    >
                      {!values.header.includes("Contact") && (
                        <Button
                          title="Click to expand"
                          icon={
                            <span className="material-symbols-rounded">
                              expand_content
                            </span>
                          }
                          className={`absolute -top-6 ${
                            state.easyMode
                              ? "left-5 right-auto"
                              : "left-auto right-5"
                          } p-1 sm:p-3 bg-color3 text-color1 text-xs sm:text-sm`}
                          rounded
                          // onClick={() => {
                          //   setExpandAboutDialog(true);
                          //   setModalContent({
                          //     header: values.header,
                          //     body: values.content,
                          //   });
                          // }}
                          onClick={() =>
                            handleExpandAboutDialogBtn({
                              header: values.header,
                              body: values.content,
                            })
                          }
                        />
                      )}
                      {!values.header.includes("Contact") &&
                      !values.header.includes("Other") ? (
                        values.content?.map(
                          (val: any, k) =>
                            val.year &&
                            val.description && (
                              <div key={k} className="flex flex-col gap-y-3">
                                <h3 className="w-fit pb-1 text-base md:text-lg lg:text-xl font-medium font-subheading border-b-2 border-color4">
                                  {val.year ? val.year : ""}
                                </h3>
                                <div className="flex">
                                  <p className="ml-8 sm:ml-12 md:text-base font-content">
                                    {val.description}
                                  </p>
                                </div>
                              </div>
                            )
                        )
                      ) : values.header.includes("Contact") ? (
                        <ContactLinks key={key} content={values.content} />
                      ) : (
                        <OtherProjects
                          key={key}
                          content={values.content}
                          setExpandAboutDialog={() =>
                            handleExpandAboutDialogBtn({
                              header: values.header,
                              body: values.content,
                            })
                          }
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center gap-x-2 mt-6 absolute left-0 mdl:left-auto right-0">
              {Object.keys(aboutInfo)?.map((keys, index) => (
                <div
                  key={keys}
                  className={`rounded-full ${
                    index === activeDotIndex
                      ? "bg-color4 w-3 h-3 shadow-md"
                      : "bg-color3 w-2 h-2 shadow-none"
                  }`}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))}
            </div>
          </div>

          {/* <div className="absolute top-0 bottom-0 md:bottom-5 right-0 flex mdl:hidden flex-col-reverse gap-2">
            <ScrollLeftRightBtns
              isScrollLeftDisabled={isScrollLeftDisabled}
              isScrollRightDisabled={isScrollRightDisabled}
              scrollLeftRight={scrollLeftRight}
            />
          </div> */}
        </div>
      </div>

      <div className="w-0 mdl:w-1/2 h-1/2 mdl:h-full hidden mdl:flex justify-end items-end bg-transparent">
        {/* messages container */}

        <ChatComponent />
        {/* <div className="hidden mdl:block w-[80%] md:w-[500px] 2xl:w-[600px] h-full md:h-auto m-auto md:m-0 aspect-auto md:aspect-square relative">
          <div className="cont absolute top-0 left-0 bg-color3"></div>
          <div className="cont absolute top-0 right-0 bg-transparent"></div>
          <div className="cont m-auto top-0 left-0 right-0 bottom-0 flex justify-center p-3 bg-color2 z-10 shadow-md">
            <div className="flex flex-col-reverse justify-center gap-2">
              <ScrollLeftRightBtns
                isScrollLeftDisabled={isScrollLeftDisabled}
                isScrollRightDisabled={isScrollRightDisabled}
                scrollLeftRight={scrollLeftRight}
              />
            </div>
          </div>
          <div className="cont hidden md:block absolute bottom-0 left-0 bg-transparent"></div>
          <div className="cont hidden md:block absolute bottom-0 right-0 bg-transparent md:bg-color3"></div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
