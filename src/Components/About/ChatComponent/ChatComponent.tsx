import { useEffect, useRef } from "react";

import { Button } from "primereact/button";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import {
  CHAT_USER_OPTIONS,
  primaryInfo,
  TECHOLUTION_PROJECTS,
  WELCOME_MSG,
} from "../../../Data/Data";
import { useAppContext } from "../../../Services/AppContext";
import { AboutMessage } from "../../../Services/Interfaces";
import { useMsgAppContext } from "../../../Services/MessagesContextAndInterfaces/MessagesContext";

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

const ChatComponent = () => {
  const { state, showToast } = useAppContext();

  const { messageState, setMessages } = useMsgAppContext();

  const lastPairRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageState.messages?.length > 0) {
      scrollToLastPair();
    }
  }, [messageState.messages]);

  const getResponse = (query: string): string => {
    const lowerQuery = query?.toLowerCase();

    if (lowerQuery?.includes("about yourself")) {
      return `Hey, this is **${primaryInfo.name}**. I work as an **${primaryInfo.currentPosition}** @ **${primaryInfo.currentOrganisation}**.`;
    } else if (lowerQuery?.includes("your work")) {
      return `
  I am currently working as an **${primaryInfo.currentPosition}** at **${
        primaryInfo.currentOrganisation
      }**.
  
  Here are some projects I've worked on at ${primaryInfo.currentOrganisation}:
  
  * ${TECHOLUTION_PROJECTS.join("\n* ")}
          `;
    } else if (lowerQuery?.includes("connect with you")) {
      return `
  Connect with me:
  <div className="flex items-center justify-center gap-x-2">
  <a href="mailto:legoyashx@hotmail.com" title="Click to copy my email id" className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"><span
                  className="pi pi-envelope text-xl md:text-2xl"
                ></span></a>
<a href="https://www.linkedin.com/in/yash-a-a669b2237" title="Click to view my LinkedIn profile" target="_blank" className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"><span
                  className="pi pi-linkedin text-xl md:text-2xl"
                ></span></a>
<a href="https://github.com/YashAgarwal1201" title="Click to check my GitHub profile" target="_blank" className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"><span
                  className="pi pi-github text-xl md:text-2xl"
                ></span></a>
<a href="https://drive.google.com/file/d/1d7Ha14j-KYxfmVHf8Fi7RvaioUzGDw_u/view?usp=share_link" title="Click to see my resume" target="_blank" className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"><span
                  className="pi pi-id-card text-xl md:text-2xl"
                ></span></a>
<a href="https://t.me/legoyashx" title="Click to connect on Telegram" target="_blank" className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"><span
                  className="pi pi-telegram text-xl md:text-2xl"
                ></span></a>
</div>
          `;
    } else if (lowerQuery?.includes("your education")) {
      return `
  ## My Education:
  
  * I completed my graduation in Bachelor of Technology in 2022 from DIT University, Dehradun, India.
  * Before that, in 2018, I completed my Intermediate (12th standard) education from Modern Era Public School, Bijnor, India.
          `;
    } else {
      return `
  Sorry, but I don't have any information on that right now.
          `;
    }
  };

  const handleOptionClick = (query: string) => {
    scrollToLastPair();
    // setShowOptions(false);

    // Add user's selected option as a message
    const userMessage: AboutMessage = {
      content: query,
      id: Date.now().toString(),
      role: "user",
    };

    const response =
      getResponse(query) || "Sorry, I don't have information on that.";

    // Add bot's response as a message
    const botMessage: AboutMessage = {
      content: response,
      id: (Date.now() + 1).toString(), // Ensure unique ID
      role: "bot",
    };

    // Update the messages state with both messages
    setMessages([...messageState.messages, userMessage, botMessage]);
  };

  const groupMessages = (messages: AboutMessage[]) => {
    const grouped: AboutMessage[][] = [];
    for (let i = 0; i < messages?.length; i += 2) {
      grouped?.push(messages?.slice(i, i + 2));
    }
    return grouped;
  };

  const groupedMessages = Array.isArray(messageState.messages)
    ? groupMessages(messageState.messages)
    : [];

  const scrollToLastPair = () => {
    lastPairRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full mdl:w-[90%] h-full mdl:h-[90%] m-auto pr-2 overflow-y-auto ">
      {groupedMessages?.length > 0 ? (
        groupedMessages?.map((value, key) => (
          <div
            key={key}
            className={`
        ${key === groupedMessages?.length - 1 ? "h-[99%] mb-0" : "mb-4"}
          flex flex-col gap-y-5`}
            ref={key === groupedMessages?.length - 1 ? lastPairRef : null}
          >
            {value?.map((message, subKey) => (
              <div
                className={`flex flex-col gap-y-2 ${
                  message.role === "user" ? "items-end" : "items-start"
                }`}
                key={subKey}
              >
                <div
                  className={`flex ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  } items-center gap-x-2  text-sm md:text-base`}
                >
                  <span className="pi pi-user bg-color4 text-color1 rounded-full p-2 mdl:p-3"></span>
                  <span className="font-subheading">
                    {message?.role === "user" ? "User" : "Yash"}
                  </span>
                </div>
                <div
                  className={`max-w-full sm:max-w-[90%] md:max-w-[80%] mdl:max-w-[70%] lg:max-w-[70%] w-fit  text-sm md:text-base ${
                    message.role === "user"
                      ? "m4-3 mdl:mr-3 bg-color3 text-color5"
                      : "ml-3 mdl:ml-4 bg-color4 text-color1"
                  } p-3 rounded-md font-content`}
                >
                  {/* <TypeItText text={WELCOME_MSG} /> */}
                  {/* {message?.content} */}
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {message?.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {groupedMessages.length - 1 === key && (
              <div className="flex flex-col gap-y-2 items-end">
                <div className="flex flex-row-reverse items-center gap-x-2  text-xs sm:text-sm md:text-base">
                  <span className="pi pi-user bg-color4 text-color1 rounded-full p-2 mdl:p-3"></span>
                  <span className="font-subheading">User</span>
                </div>
                <div className="w-[97%] mr-3 mdl:mr-4 flex flex-wrap gap-2 justify-end font-content">
                  {messageState.showOptions &&
                    CHAT_USER_OPTIONS?.map((value, key) => {
                      if (value.visible)
                        return (
                          <Button
                            key={key}
                            label={value.title}
                            className={`px-3 py-2 capitalize text-xs sm:text-sm md:text-base border ${
                              state?.selectedAboutSectionBtn?.toLowerCase() ===
                              value?.title?.toLowerCase()
                                ? "block"
                                : "block"
                            }`}
                            onClick={() => {
                              handleOptionClick(value.title);
                            }}
                          />
                        );
                    })}
                  <Button
                    disabled={messageState.messages?.length === 0}
                    icon={"pi pi-refresh"}
                    onClick={() => {
                      setMessages([]);
                      showToast("success", "Success", "Messages reset");
                    }}
                    className="border"
                  />
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2  text-sm md:text-base">
              <span className="pi pi-user bg-color4 text-color1 rounded-full p-2 mdl:p-3"></span>
              <span className="font-subheading">Yash</span>
            </div>
            <div className="max-w-full sm:max-w-[90%] md:max-w-[80%] mdl:max-w-[70%] lg:max-w-[70%] w-fit ml-3 mdl:ml-4 bg-color3 p-3 rounded-md font-content text-sm md:text-base">
              {/* <TypeItText text={WELCOME_MSG} /> */}
              {WELCOME_MSG}
            </div>
          </div>
          <div className="flex flex-col gap-y-2 items-end">
            <div className="flex flex-row-reverse items-center gap-x-2  text-xs sm:text-sm md:text-base">
              <span className="pi pi-user bg-color4 text-color1 rounded-full p-2 mdl:p-3"></span>
              <span className="font-subheading">User</span>
            </div>
            <div className="w-full mdl:w-[90%] mr-3 mdl:mr-4 flex flex-wrap gap-2 justify-end font-content">
              {/* {WELCOME_MSG} */}
              {messageState.showOptions &&
                CHAT_USER_OPTIONS?.map((value, key) => {
                  if (value?.visible)
                    return (
                      <Button
                        key={key}
                        label={value?.title}
                        className={`px-3 py-2 capitalize text-xs sm:text-sm md:text-base border ${
                          state?.selectedAboutSectionBtn?.toLowerCase() ===
                          value?.title?.toLowerCase()
                            ? "block"
                            : "block"
                        }`}
                        onClick={() => {
                          handleOptionClick(value?.title);
                        }}
                      />
                    );
                })}
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default ChatComponent;
