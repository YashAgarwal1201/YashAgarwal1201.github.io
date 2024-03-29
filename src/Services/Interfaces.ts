import { Dispatch, RefObject } from "react";

import { Toast } from "primereact/toast";

export type Action<T> = { type: string; payload?: T };

export interface State {
  [key: string]: any;
  themeSelected: string;
  selectedContentBtn: string;
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
  | { title: string; url: string; type: string }
  | { key: string; value: boolean };

export interface AppContextType {
  state: State;
  dispatch: Dispatch<Action<ActionType>>;
  showToast: (
    severity: "success" | "info" | "warn" | "error" | undefined,
    summary: "Success" | "Info" | "Warning" | "Error",
    detail: string,
    life?: number
  ) => void;
}

export interface ModalContent {
  header: any;
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
