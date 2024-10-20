import React, { createContext, useReducer } from "react";

import { Toast } from "primereact/toast/toast";

import {
  Action,
  ActionType,
  AppContextType,
  ModalContent,
  State,
} from "./Interfaces";

const initialState: State = localStorage.getItem(`yashAppData`) //(`yashAppData_${window.name}`)
  ? JSON.parse(localStorage.getItem(`yashAppData`) as string) //(`yashAppData_${window.name}`) as string)
  : {
      themeSelected:
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "night"
          : "fall", //"fall",
      landingScreen: {
        showLandingScreen: true,
        neverShowLandingScreen: false,
      },
      showFeedbackDialog: false,
      selectedContentBtn: "home",
      selectedAboutSectionbtn: "work",
      toast: null,
      modalContent: {
        header: "",
        body: "",
      },
      easyMode: false,
    };

const reducer = (state: State, action: Action<ActionType> | any): State => {
  // const { contextStateKey, payload } = (action?.payload as 'contextStateKey' | 'payload') ?? {};

  switch (action.type) {
    case "SET_TOAST_REF": {
      return { ...state, toast: action.payload as Toast };
    }

    case "SET_THEME_SELECTED": {
      return {
        ...state,
        themeSelected: action.payload as string,
      };
    }

    case "SET_SHOW_LANDING_SCREEN": {
      return {
        ...state,
        landingScreen: {
          ...state.landingScreen,
          showLandingScreen: action.payload as boolean,
        },
      };
    }

    case "SET_NEVER_SHOW_LANDING_SCREEN": {
      return {
        ...state,
        landingScreen: {
          ...state.landingScreen,
          neverShowLandingScreen: action.payload as boolean,
        },
      };
    }

    case "SET_SELECTED_CONTENT_BTN": {
      return {
        ...state,
        selectedContentBtn: action.payload as string,
      };
    }

    case "SET_SELECTED_ABOUT_SECTION_BTN": {
      return {
        ...state,
        selectedAboutSectionBtn: action.payload as string,
      };
    }

    case "SET_MODAL_CONTENT": {
      return {
        ...state,
        modalContent: action.payload as ModalContent,
      };
    }

    case "SET_SHOW_FEEDBACK_DIALOG": {
      return {
        ...state,
        showFeedbackDialog: action.payload as boolean,
      };
    }

    case "SET_EASY_MODE": {
      return {
        ...state,
        easyMode: action.payload as boolean,
      };
    }

    default:
      return state;
  }
};

const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => null,
  setSelectedContent: () => null,
  setSelectedAboutSectionBtn: () => null,
  setThemeSelected: () => null,
  setShowLandingScreen: () => null, // New method
  setNeverShowLandingScreen: () => null,
  setModalContent: () => null,
  setShowFeedbackDialog: () => null,
  setEasyMode: () => null,
  showToast: () => null,
});

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const showToast = (
    severity: "success" | "info" | "warn" | "error" | undefined,
    summary: "Success" | "Info" | "Warning" | "Error",
    detail: string,
    life?: number
  ) => {
    // state.toast?.clear();
    state.toast?.show({ severity, summary, detail, life });
  };

  const setThemeSelected = (payload: string) => {
    dispatch({ type: "SET_THEME_SELECTED", payload });
  };

  const setShowLandingScreen = (payload: boolean) => {
    dispatch({ type: "SET_SHOW_LANDING_SCREEN", payload });
  };

  const setNeverShowLandingScreen = (payload: boolean) => {
    dispatch({ type: "SET_NEVER_SHOW_LANDING_SCREEN", payload });
  };

  const setSelectedContent = (payload: string) => {
    dispatch({ type: "SET_SELECTED_CONTENT_BTN", payload });
  };

  const setSelectedAboutSectionBtn = (payload: string) => {
    dispatch({ type: "SET_SELECTED_ABOUT_SECTION_BTN", payload });
  };

  const setModalContent = (payload: ModalContent) => {
    dispatch({ type: "SET_MODAL_CONTENT", payload });
  };

  const setShowFeedbackDialog = (payload: boolean) => {
    dispatch({ type: "SET_SHOW_FEEDBACK_DIALOG", payload });
  };

  const setEasyMode = (payload: boolean) => {
    dispatch({ type: "SET_EASY_MODE", payload });
  };

  const contextValue: AppContextType = {
    state,
    dispatch,
    setThemeSelected,
    setShowLandingScreen, // New method
    setNeverShowLandingScreen, // New method
    setShowFeedbackDialog,
    setSelectedContent,
    setSelectedAboutSectionBtn,

    setModalContent,
    setEasyMode,
    showToast,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = React.useContext<AppContextType>(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};

export { AppContext, AppContextProvider, useAppContext };
