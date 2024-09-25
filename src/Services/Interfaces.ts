import React, { Dispatch, RefObject } from "react";

import { Toast } from "primereact/toast";

export type Action<T> = { type: string; payload?: T };

export interface State {
  [key: string]: any;
  themeSelected: string;
  landingScreen: {
    showLandingScreen: boolean;
    neverShowLandingScreen: boolean;
  };
  showFeedbackDialog: boolean;
  selectedContentBtn: string;
  selectedAboutSectionBtn: string;
  toast: Toast | null;
  modalContent: ModalContent;
  easyMode: boolean;
}

export interface ToastInterface {
  severity: "success" | "info" | "warn" | "error" | undefined;
  summary: "Success" | "Info" | "Warning" | "Error";
  detail: string;
  life?: number;
}

export type ActionType =
  | Toast
  | boolean
  | string
  | null
  | ToastInterface
  | AboutMessage
  | AboutMessage[]
  | { title: string; url: string; type: string }
  | { key: string; value: boolean }
  | { showLandingScreen: boolean; neverShowLandingScreen: boolean };

export interface AppContextType {
  state: State;
  dispatch: Dispatch<Action<ActionType>>;
  setThemeSelected: (payload: string) => void;
  setShowLandingScreen: (payload: boolean) => void;
  setNeverShowLandingScreen: (payload: boolean) => void;
  setEasyMode: (payload: boolean) => void;
  setShowFeedbackDialog: (payload: boolean) => void;
  setSelectedContent: (payload: string) => void;
  setSelectedAboutSectionBtn: (payload: string) => void;
  setModalContent: (payload: ModalContent) => void;

  showToast: (
    severity: "success" | "info" | "warn" | "error" | undefined,
    summary: "Success" | "Info" | "Warning" | "Error",
    detail: string,
    life?: number
  ) => void;
}

export interface ModalContent {
  header: string;
  body: any;
}

export type dispatchParamType = {
  type: string;
  contextStateKey: string;
  payload: any;
};

export type HomeProps = { reference: RefObject<HTMLDivElement> };

export type AboutProps = {
  reference: RefObject<HTMLDivElement>;
  setExpandAboutDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

export type FeedbackProps = {
  reference: RefObject<HTMLDivElement>; //React.MutableRefObject<null>;
  setExpandFeedbackDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AboutMessage = {
  content: any;
  id: string;
  role: string;
};
