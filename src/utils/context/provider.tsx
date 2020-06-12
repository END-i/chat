import React, { useReducer } from "react";

import DispatchContext from "./dispatch";
import StateContext from "./state";
import initialState from "./initialState";
import { IInitialState, IDispatch, IProvider } from "utils/types";

let reducer = (state: IInitialState, { type, value }: IDispatch) => {
  return { ...state, [type]: value };
};

type IProviderProps = {
  children: React.ReactNode;
};

const Provider: React.FC<IProvider> = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext dispatch={dispatch}>
      <StateContext state={state}>{children}</StateContext>
    </DispatchContext>
  );
};

export default Provider;
