import React, { createContext, useReducer } from "react";

import { Toast } from "primereact/toast/toast";

import {
  Action,
  ActionType,
  AppContextType,
  // ModalContent,
  State,
} from "./Interfaces";

const initialState: State = localStorage.getItem(`yashAppData`)//(`yashAppData_${window.name}`)
  ? JSON.parse(localStorage.getItem(`yashAppData`) as string)//(`yashAppData_${window.name}`) as string)
  : {
      modeSelected: "dark",
      toast: null,
      modalContent: {
        header: "",
        body: "",
      },
    };

const reducer = (state: State, action: Action<ActionType> | any): State => {
  // const { contextStateKey, payload } = (action?.payload as 'contextStateKey' | 'payload') ?? {};

  switch (action.type) {
    case "SET_TOAST_REF": {
      return { ...state, toast: action.payload as Toast };
    }

    case "SET_MODE_SELECTED": {
      return {
        ...state,
        modeSelected: action.payload as string,
      };
    }

    case "SET_MODAL_CONTENT": {
      return {
        ...state,
        modalContent: action.payload as any,
      };
    }

    default:
      return state;
  }
};

const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => null,
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

  const contextValue: AppContextType = {
    state,
    dispatch,
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
