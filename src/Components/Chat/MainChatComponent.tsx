import { useEffect, useRef, useState } from "react";

import { Button } from "primereact/button";
import ReactDOMServer from "react-dom/server";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import TypeIt from "typeit-react";

import { CHAT_USER_MORE_OPTIONS, CHAT_USER_OPTIONS } from "../../Data/Data";
import { useAppContext } from "../../Services/AppContext";
import {
  getResponse,
  WELCOME_MSG,
} from "../../Services/GetResponses/GetResponses";
import { AboutMessage } from "../../Services/Interfaces";
import { useMsgAppContext } from "../../Services/MessagesContextAndInterfaces/MessagesContext";

const MainChatComponent = () => {
  const { state, showToast } = useAppContext();

  const { messageState, setMessages, setShowOptions, setShowMoreOptions } =
    useMsgAppContext();

  const [msgContainerHeight, setMsgContainerHeight] = useState<number>(0);
  const [startNewMessageAnimation, setStartNewMessageAnimation] =
    useState<boolean>(false);

  const lastPairRef = useRef<HTMLDivElement>(null);
  const userOptionsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (userOptionsContainerRef.current) {
        setMsgContainerHeight(userOptionsContainerRef.current.clientHeight);
      }
    };

    const resizeObserver = new ResizeObserver(updateHeight);
    if (userOptionsContainerRef.current) {
      resizeObserver.observe(userOptionsContainerRef.current);
    }

    // Cleanup on component unmount
    return () => {
      if (userOptionsContainerRef.current) {
        resizeObserver.unobserve(userOptionsContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // scrollToLastPair();
    setTimeout(() => {
      scrollToLastPair();
    }, 1000);
  }, []);

  useEffect(() => {
    if (messageState.messages?.length > 0) {
      // setTimeout(() => {
      scrollToLastPair();
      // }, 1000);
    }
  }, [messageState.messages]);

  const handleOptionClick = (query: string) => {
    scrollToLastPair();
    // setShowOptions(false);

    // if(query.includes("more options") || query.includes("previous options"))
    // Add user's selected option as a message
    const userMessage: AboutMessage = {
      content: query,
      id: Date.now().toString(),
      role: "user",
    };

    const response = ReactDOMServer.renderToStaticMarkup(
      getResponse({
        query: query,
        setShowOptions,
        setShowMoreOptions,
      }) || "Sorry, I don't have information on that."
    );
    // getResponse({
    //   query: query,
    //   setShowOptions,
    //   setShowMoreOptions,
    // }) || "Sorry, I don't have information on that.";

    // Add bot's response as a message
    const botMessage: AboutMessage = {
      content: response,
      id: (Date.now() + 1).toString(), // Ensure unique ID
      role: "bot",
    };

    // Update the messages state with both messages
    setMessages([...messageState.messages, userMessage, botMessage]);
    setStartNewMessageAnimation(true);

    const TIMEOUT =
      response?.length < 1500 ? 20 * response.length : response.length;

    // Stop the animation after a short delay
    setTimeout(() => {
      setStartNewMessageAnimation(false);
    }, TIMEOUT * 1000);
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
    <div className="w-full h-full flex flex-col items-center">
      <div
        className="w-full m-auto px-2 py-2 sm:pr-3 sm:py-3 mdl:pr-4 mdl:py-4 overflow-y-auto contentBody"
        style={{ height: `calc(100% - ${msgContainerHeight}px)` }}
      >
        {groupedMessages?.length > 0 ? (
          groupedMessages?.map((value, key) => (
            <div
              key={key}
              className={`
        ${key === groupedMessages?.length - 1 ? "h-[100%] mb-0" : "mb-4"}
          flex flex-col gap-y-5`}
              ref={key === groupedMessages?.length - 1 ? lastPairRef : null}
            >
              {value?.map((message, subKey) => (
                <div
                  className={`flex flex-col gap-y-2 sm:gap-y-3 mdl:gap-y-4 ${
                    message.role === "user" &&
                    messageState.selectedChatAppearance !== "compact"
                      ? "items-end"
                      : "items-start"
                  }`}
                  key={subKey}
                >
                  <div
                    className={`flex ${
                      message.role === "user" &&
                      messageState.selectedChatAppearance !== "compact"
                        ? "flex-row-reverse"
                        : "flex-row"
                    } items-center gap-x-2 sm:gap-x-3 mdl:gap-x-4 text-sm lg:text-base 2xl:text-lg`}
                  >
                    <span className="material-symbols-rounded bg-color3 text-color4 rounded-full p-2 mdl:p-3">
                      person
                    </span>
                    <span className="font-subheading text-color4">
                      {message?.role === "user" ? "You" : "Yash Agarwal"}
                    </span>
                  </div>
                  <div
                    className={`max-w-full sm:max-w-[90%] md:max-w-[80%] mdl:max-w-[70%] lg:max-w-[70%] w-fit  text-base lg:text-lg 2xl:text-xl ${
                      message.role === "user"
                        ? "bg-color2 text-color4"
                        : "bg-color4 text-color1"
                    } ${
                      messageState.selectedChatAppearance === "compact"
                        ? "ml-3 mdl:ml-4"
                        : message.role === "user"
                        ? "mr-3 mdl:mr-4"
                        : "ml-3 mdl:ml-4"
                    } p-3 rounded-md font-content *:mb-1`}
                  >
                    {startNewMessageAnimation &&
                    message.role === "bot" &&
                    key === groupedMessages?.length - 1 ? (
                      <TypeIt
                        options={{
                          speed: 10,
                          waitUntilVisible: true,
                          cursor: false,
                        }}
                      >
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                          {message?.content}
                        </ReactMarkdown>
                      </TypeIt>
                    ) : (
                      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {message?.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-2 text-sm lg:text-base 2xl:text-lg">
                <span className="material-symbols-rounded bg-color3 text-color4 rounded-full p-2 mdl:p-3">
                  person
                </span>
                <span className="font-subheading text-color4">
                  Yash Agarwal
                </span>
              </div>
              <div className="max-w-full sm:max-w-[90%] md:max-w-[80%] mdl:max-w-[70%] lg:max-w-[70%] w-fit ml-3 mdl:ml-4 bg-color4 p-3 rounded-md font-content text-color1 text-base lg:text-lg 2xl:text-xl">
                <TypeIt
                  options={{
                    speed: 10,
                    waitUntilVisible: true,
                    cursor: false,
                  }}
                >
                  {WELCOME_MSG}
                </TypeIt>
              </div>
            </div>
          </div>
        )}{" "}
      </div>

      {/* user options */}
      <div
        className="w-full h-fit flex flex-col gap-y-2 items-end"
        ref={userOptionsContainerRef}
      >
        <div className="h-full p-3 flex flex-row-reverse items-end gap-x-2  text-xs sm:text-sm md:text-base">
          <span className="material-symbols-rounded bg-color3 text-color4 rounded-full p-2 mdl:p-3">
            person
          </span>
          <div className="w-full mdl:w-[90%] mr-3 mdl:mr-4 flex flex-wrap gap-2 justify-end font-content">
            {/* {WELCOME_MSG} */}
            {messageState.showOptions
              ? CHAT_USER_OPTIONS?.map((value, key) => {
                  if (value?.visible)
                    return (
                      <Button
                        key={key}
                        label={value?.title}
                        className={`px-3 py-2 capitalize text-sm sm:text-base 2xl:text-lg border border-color5 ${
                          state?.selectedAboutSectionBtn?.toLowerCase() ===
                          value?.title?.toLowerCase()
                            ? "block"
                            : "block"
                        }`}
                        onClick={() => {
                          if (
                            value.title
                              .toLowerCase()
                              .includes("more options") ||
                            value.title
                              .toLowerCase()
                              .includes("previous options")
                          ) {
                            getResponse({
                              query: value.title,
                              setShowOptions,
                              setShowMoreOptions,
                            });
                          } else {
                            handleOptionClick(value.title);
                          }
                        }}
                      />
                    );
                })
              : messageState.moreOptions
              ? CHAT_USER_MORE_OPTIONS?.map((value, key) => {
                  if (value?.visible)
                    return (
                      <Button
                        key={key}
                        label={value?.title}
                        className={`px-3 py-2 capitalize text-sm sm:text-base 2xl:text-lg border border-color5 ${
                          state?.selectedAboutSectionBtn?.toLowerCase() ===
                          value?.title?.toLowerCase()
                            ? "block"
                            : "block"
                        }`}
                        onClick={() => {
                          if (
                            value.title
                              .toLowerCase()
                              .includes("more options") ||
                            value.title
                              .toLowerCase()
                              .includes("previous options")
                          ) {
                            getResponse({
                              query: value.title,
                              setShowOptions,
                              setShowMoreOptions,
                            });
                          } else {
                            handleOptionClick(value.title);
                          }
                        }}
                      />
                    );
                })
              : ""}
            <Button
              title="reset chat"
              disabled={messageState.messages?.length === 0}
              icon={"pi pi-refresh"}
              onClick={() => {
                setMessages([]);
                setShowMoreOptions(false);
                setShowOptions(true);
                showToast("success", "Success", "Messages reset");
              }}
              className="px-3 py-2 border border-color5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChatComponent;
