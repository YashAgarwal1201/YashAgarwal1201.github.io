import { Dispatch } from "react";

export type Action<T> = { type: string; payload?: T };

export interface MessageState {
  [key: string]: any;
  showOptions: boolean;
  options: ChatOption[];
  showMoreOptions: boolean;
}

export type ChatOption = {
  title: string;
  visible: boolean;
};

export type ActionType =
  | boolean
  | string
  | null
  | ChatOption
  | ChatOption[]
  // | AboutMessage
  // | AboutMessage[]
  | { key: string; value: boolean };

export interface AppContextType {
  messageState: MessageState;
  dispatch: Dispatch<Action<ActionType>>;
  setShowOptions: (showOptions: boolean) => void;
  setShowMoreOptions: (showMoreOptions: boolean) => void;
}

export type dispatchParamType = {
  type: string;
  contextStateKey: string;
  payload: any;
};

// export type AboutMessage = {
//   content: string;
//   id: string;
//   role: string;
// };
