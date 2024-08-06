import React, { useEffect, useRef } from "react";

import { Button } from "primereact/button";

import {
  CHAT_USER_OPTIONS,
  primaryInfo,
  WELCOME_MSG,
} from "../../../Data/Data";
import { useAppContext } from "../../../Services/AppContext";
import { AboutMessage } from "../../../Services/Interfaces";

const ChatComponent = () => {
  const {
    state,
    // setSelectedAboutSectionBtn,
    setMessages,
    showToast,
  } = useAppContext();

  const lastPairRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.messages?.length > 0) {
      // console.log(55);
      scrollToLastPair();
    }
  }, [state.messages]);

  const getResponse = (query: string) => {
    if (query?.toLowerCase()?.includes("about yourself")) {
      // Object.keys(CHAT_USER_OPTIONS).map((val, key) =>
      //   CHAT_USER_OPTIONS[key].title.includes("about yourself")
      //     ? (CHAT_USER_OPTIONS[key].visible = false)
      //     : ""
      // );
      return `Hey, this is ${primaryInfo.name}. I work as an ${primaryInfo.currentPosition} @ ${primaryInfo.currentOrganisation}`;
    }
    return query;
  };

  const handleOptionClick = (query: string) => {
    // console.log("option:", option);
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
    setMessages([...state.messages, userMessage, botMessage]);
  };

  const groupMessages = (messages: AboutMessage[]) => {
    const grouped: AboutMessage[][] = [];
    for (let i = 0; i < messages?.length; i += 2) {
      grouped?.push(messages?.slice(i, i + 2));
    }
    return grouped;
  };

  const groupedMessages = Array.isArray(state.messages)
    ? groupMessages(state.messages)
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
        ${key === groupedMessages?.length - 1 ? "h-[100%]" : ""}
          flex flex-col gap-y-5 mb-4`}
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
                  } items-center gap-x-2  text-xs sm:text-sm md:text-base`}
                >
                  <span className="pi pi-user bg-color4 text-color1 rounded-full p-2 mdl:p-3"></span>
                  <span className="font-subheading">
                    {message?.role === "user" ? "User" : "Yash"}
                  </span>
                </div>
                <div
                  className={`max-w-full sm:max-w-[90%] md:max-w-[80%] mdl:max-w-[70%] lg:max-w-[70%] w-fit  text-xs sm:text-sm md:text-base ${
                    message.role === "user"
                      ? "m4-3 mdl:mr-3 bg-color3 text-color5"
                      : "ml-3 mdl:ml-4 bg-color4 text-color1"
                  } p-3 rounded-md font-content`}
                >
                  {/* <TypeItText text={WELCOME_MSG} /> */}
                  {message?.content}
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
                  {/* {WELCOME_MSG} */}
                  {CHAT_USER_OPTIONS?.map((value, key) => {
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
                            // alert(88);
                            handleOptionClick(value.title);
                          }}
                        />
                      );
                  })}
                  <Button
                    disabled={state.messages?.length === 0}
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
            <div className="flex items-center gap-x-2  text-xs sm:text-sm md:text-base">
              <span className="pi pi-user bg-color4 text-color1 rounded-full p-2 mdl:p-3"></span>
              <span className="font-subheading">Yash</span>
            </div>
            <div className="max-w-full sm:max-w-[90%] md:max-w-[80%] mdl:max-w-[70%] lg:max-w-[70%] w-fit ml-3 mdl:ml-4 bg-color3 p-3 rounded-md font-content  text-xs sm:text-sm md:text-base">
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
              {CHAT_USER_OPTIONS?.map((value, key) => {
                if (value?.visible)
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
                        // alert(88);
                        handleOptionClick(value.title);
                      }}
                    />
                  );
              })}
              {/* <Button
            icon={"pi pi-refresh"}
            onClick={() => {
              setMessages([]);
              showToast("success", "Success", "Messages reset");
            }}
            className="border"
          /> */}
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default ChatComponent;
