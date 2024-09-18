import React, { createContext, useReducer } from "react";

import {
  Action,
  ActionType,
  AppContextType,
  ChatOption,
  MessageState,
} from "./MessagesTypesAndInterfaces";
import { CHAT_USER_MORE_OPTIONS, CHAT_USER_OPTIONS } from "../../Data/Data";
import { AboutMessage } from "../Interfaces";

const initialState: MessageState = sessionStorage.getItem(`yashAppMsgData`)
  ? JSON.parse(sessionStorage.getItem(`yashAppMsgData`) as string)
  : {
      messages: [],
      showOptions: true,
      options: CHAT_USER_OPTIONS,
      showMoreOptions: false,
      moreOptions: CHAT_USER_MORE_OPTIONS,
      selectedChatAppearance: "default",
    };

const reducer = (
  messageState: MessageState,
  action: Action<ActionType>
): MessageState => {
  switch (action.type) {
    case "SET_MESSAGES": {
      return {
        ...messageState,
        messages: Array.isArray(action.payload)
          ? (action.payload as AboutMessage[])
          : [],
      };
    }
    case "SET_CHAT_OPTIONS": {
      return { ...messageState, options: action.payload as ChatOption[] };
    }
    case "SET_SHOW_OPTIONS": {
      return { ...messageState, showOptions: action.payload as boolean };
    }
    case "SET_SHOW_MORE_OPTIONS": {
      return { ...messageState, showMoreOptions: action.payload as boolean };
    }

    case "SET_SELECTED_CHAT_APPEARANCE": {
      return {
        ...messageState,
        selectedChatAppearance: action.payload as string,
      };
    }

    default:
      return messageState;
  }
};

const MsgAppContext = createContext<AppContextType>({
  messageState: initialState,
  dispatch: () => null,
  setMessages: () => null,
  setShowOptions: () => null,
  setShowMoreOptions: () => null,
  setSelectedChatAppearance: () => null,
  // setMessages: () => null,
});

const MsgAppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messageState, dispatch] = useReducer(reducer, initialState);

  const setMessages = (newMessage: AboutMessage[]) => {
    dispatch({
      type: "SET_MESSAGES",
      payload: newMessage, //[...state.messages, newMessage],
    });
  };

  const setShowOptions = (showOptions: boolean) => {
    dispatch({ type: "SET_SHOW_OPTIONS", payload: showOptions });
  };

  const setShowMoreOptions = (showMoreOptions: boolean) => {
    dispatch({ type: "SET_SHOW_MORE_OPTIONS", payload: showMoreOptions });
  };

  const setSelectedChatAppearance = (payload: string) => {
    dispatch({ type: "SET_SELECTED_CHAT_APPEARANCE", payload });
  };

  // const setMessages = (newMessage: AboutMessage[]) => {
  //   dispatch({
  //     type: "SET_MESSAGES",
  //     payload: newMessage, //[...state.messages, newMessage],
  //   });
  // };

  const contextValue: AppContextType = {
    messageState,
    dispatch,
    setMessages,
    setShowOptions,
    setShowMoreOptions,
    setSelectedChatAppearance,
    // setMessages,
  };

  return (
    <MsgAppContext.Provider value={contextValue}>
      {children}
    </MsgAppContext.Provider>
  );
};

const useMsgAppContext = () => {
  const context = React.useContext(MsgAppContext);

  if (context === undefined) {
    throw new Error(
      "useAppContext must be used within a MsgAppContextProvider"
    );
  }

  return context;
};

export { MsgAppContext, MsgAppContextProvider, useMsgAppContext };
