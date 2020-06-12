import { ReactNode } from "react";

export type IProvider = {
  children: ReactNode;
};
export interface INotification {
  type: IMessageType;
  title?: string;
  content?: string;
}
export interface IUserState {
  name: string;
  photo: string;
}
export type IMessageType = "error" | "success" | "warning" | "info";
export interface IInitialState {
  loading: boolean;
  errors: boolean;
  isAuth: boolean | string;
  uid: string;
  notifications: INotification | null;
  chats: any;
  user: IUserState | null;
}
export interface IMessageProps extends INotification {
  remove: () => void;
  idx: number;
}
export type IDispatch = {
  type: IType;
  value: any;
};
export type IType = "errors" | "loading" | "uid" | "isAuth" | "notifications" | "chats" | "user";

export interface IMethods {}
export interface IEventTargetValueProps {
  target: {
    value: string;
  };
}
export interface IRoute {
  path: string;
  component: () => JSX.Element;
}
export interface IRouteWrapper extends IRoute {
  isAuth: boolean;
  redirectPathname: string;
  publicRoutes?: boolean;
}
export interface IChilrenProps {
  children: ReactNode;
}
export interface IEventValue {
  target: { value: string };
}
export interface IEventKey {
  key: string;
}
export interface IFormProps {
  submit: (values: any) => void;
  button: (props: any) => JSX.Element;
  fields: {
    name: string;
    label?: string;
    value?: string;
    rules?: { message: string; regex: RegExp }[];
    input: (props: any) => JSX.Element;
  }[];
  grid?: {
    col: string;
    row: string;
  };
  errors?: {
    [key: string]: string;
  };
}
export interface IFieldInputProps {
  onChange: (e: IEventValue) => void;
  error: string;
  defaultValue: string;
}

export interface IRecoveryFunction {
  email: string;
}
export interface ISignInFunction {
  email: string;
  password: string;
}
export interface ISignUpFunction {
  name: string;
  email: string;
  password: string;
}

export type IAuthUser = IUser | null;
export interface IUser {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
}

export interface IMessage {
  content: string;
  userId: string;
  timestamp: number;
  id: number;
  key: string;
  user: IUserState;
}
